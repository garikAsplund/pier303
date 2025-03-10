// vite-plugin-imagetools-tracker.js
import fs from 'fs';
import path from 'path';

export default function imagetoolsTrackerPlugin() {
  // Path to our tracking file
  const trackingFilePath = path.resolve('./node_modules/.cache/image-tracker.json');
  
  // Map to track image-to-cache relationships
  let imageToCache = new Map();
  
  // Load existing tracking data if available
  try {
    if (fs.existsSync(trackingFilePath)) {
      const trackingData = JSON.parse(fs.readFileSync(trackingFilePath, 'utf8'));
      Object.entries(trackingData).forEach(([imagePath, cacheEntries]) => {
        imageToCache.set(imagePath, cacheEntries);
      });
      console.log(`Loaded tracking data for ${imageToCache.size} images`);
    }
  } catch (err) {
    console.error(`Error loading tracking data: ${err.message}`);
  }
  
  return {
    name: 'vite-plugin-imagetools-tracker',
    enforce: 'pre', // Run before enhanced-img
    
    configureServer(server) {
      console.log('Imagetools tracker plugin is active');
      
      // Save the tracking data
      function saveTrackingData() {
        try {
          const trackingDir = path.dirname(trackingFilePath);
          if (!fs.existsSync(trackingDir)) {
            fs.mkdirSync(trackingDir, { recursive: true });
          }
          
          const data = {};
          imageToCache.forEach((cacheEntries, imagePath) => {
            data[imagePath] = cacheEntries;
          });
          
          fs.writeFileSync(trackingFilePath, JSON.stringify(data, null, 2));
          console.log(`Saved tracking data for ${imageToCache.size} images`);
        } catch (err) {
          console.error(`Error saving tracking data: ${err.message}`);
        }
      }
      
      // Check the cache directory periodically to track new entries
      function scanCacheDirectory() {
        const cachePath = path.resolve('./node_modules/.cache/imagetools');
        if (!fs.existsSync(cachePath)) return;
        
        try {
          const beforeCount = new Set(
            Array.from(imageToCache.values()).flat()
          ).size;
          
          const cacheFiles = fs.readdirSync(cachePath);
          console.log(`Found ${cacheFiles.length} cache entries`);
          
          // Create a set of all known cache entries
          const knownEntries = new Set(
            Array.from(imageToCache.values()).flat()
          );
          
          // Find new cache entries
          const newEntries = cacheFiles.filter(entry => !knownEntries.has(entry));
          
          if (newEntries.length > 0) {
            console.log(`Found ${newEntries.length} new cache entries`);
            
            // Assume these belong to the most recently modified image
            // Not perfect but better than nothing
            const recentlyModifiedImages = Array.from(server.watcher.getWatched())
              .flat()
              .filter(path => /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(path))
              .sort((a, b) => {
                try {
                  const statA = fs.statSync(a);
                  const statB = fs.statSync(b);
                  return statB.mtimeMs - statA.mtimeMs;
                } catch (e) {
                  return 0;
                }
              });
            
            if (recentlyModifiedImages.length > 0) {
              const recentImage = recentlyModifiedImages[0];
              console.log(`Associating new cache entries with ${recentImage}`);
              
              // Add these entries to our tracking
              if (!imageToCache.has(recentImage)) {
                imageToCache.set(recentImage, []);
              }
              
              const entries = imageToCache.get(recentImage);
              newEntries.forEach(entry => {
                entries.push(entry);
              });
              
              saveTrackingData();
            }
          }
          
          const afterCount = new Set(
            Array.from(imageToCache.values()).flat()
          ).size;
          
          if (afterCount > beforeCount) {
            console.log(`Added ${afterCount - beforeCount} new cache entries to tracking`);
          }
        } catch (err) {
          console.error(`Error scanning cache: ${err.message}`);
        }
      }
      
      // Scan the cache directory initially
      scanCacheDirectory();
      
      // Set up interval to scan periodically
      const scanInterval = setInterval(scanCacheDirectory, 5000);
      
      // Clean up on close
      server.httpServer.on('close', () => {
        clearInterval(scanInterval);
        saveTrackingData();
      });
      
      // Handle image changes
      server.watcher.on('change', (filePath) => {
        if (/\.(jpg|jpeg|png|gif|webp|avif)$/i.test(filePath)) {
          console.log(`Image changed: ${filePath}`);
          
          // Check if we have tracking data for this image
          if (imageToCache.has(filePath)) {
            const cacheEntries = imageToCache.get(filePath);
            console.log(`Found ${cacheEntries.length} tracked cache entries for ${filePath}`);
            
            const cachePath = path.resolve('./node_modules/.cache/imagetools');
            let deletedCount = 0;
            
            // Delete all associated cache entries
            for (const entry of cacheEntries) {
              try {
                const fullPath = path.join(cachePath, entry);
                if (fs.existsSync(fullPath)) {
                  console.log(`Deleting cache entry: ${entry}`);
                  fs.unlinkSync(fullPath);
                  deletedCount++;
                }
              } catch (err) {
                console.error(`Failed to delete cache entry: ${err.message}`);
              }
            }
            
            console.log(`Deleted ${deletedCount} cache entries for ${path.basename(filePath)}`);
            
            // Remove this image from tracking after clearing its cache
            imageToCache.delete(filePath);
            saveTrackingData();
            
            // Force a page reload
            setTimeout(() => {
              console.log("Triggering full reload after cache clear");
              server.ws.send({ type: 'full-reload' });
            }, 100);
          } else {
            console.log(`No tracking data found for ${filePath}`);
            
            // Still force a reload
            setTimeout(() => {
              server.ws.send({ type: 'full-reload' });
            }, 100);
          }
        }
      });
    }
  };
}