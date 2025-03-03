<div class="relative">
    <!-- Hero Image -->
    <div class="w-full h-screen relative">
      <!-- Blue gradient overlay (top to bottom) -->
      <div class="absolute inset-0 bg-gradient-to-b from-blue-800/40 to-white/20 z-10"></div>
      <enhanced:img 
        src="/static/hero.jpg" 
        alt="Fresh seafood" 
        class="w-full h-full object-cover"
      />
      
      <!-- Hero Content -->
      <div class="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Bringing quality seafood to Wallowa County</h1>
          <p class="text-xl md:text-2xl text-white mb-8">Since 2021</p>
          <!-- <div class="flex flex-wrap justify-center gap-4">
            <a href="/menu" class="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-md text-lg font-medium transition">
              View Our Menu
            </a>
            <a href="/about" class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-800 px-6 py-3 rounded-md text-lg font-medium transition">
              Learn More
            </a>
          </div> -->
        </div>
      </div>
    </div>
    
    <!-- Info Bar -->
    <div class="bg-white py-6 shadow-md">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <!-- Hours -->
          <div class="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div class="bg-cyan-100 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800 mb-1">Opening Hours</h3>
              <p class="text-gray-600">Wednesday - Friday</p>
              <p class="text-gray-600">11:00 AM - 4:00 PM</p>
            </div>
          </div>
          
          <!-- Location -->
          <div class="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div class="bg-cyan-100 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800 mb-1">Location</h3>
              <p class="text-gray-600">303 NW Garfield St,</p>
              <p class="text-gray-600">Enterprise, OR 97828</p>
            </div>
          </div>
          
          <!-- Contact -->
          <div class="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div class="bg-cyan-100 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-800 mb-1">Contact Us</h3>
              <p class="text-gray-600">pier303seafood@gmail.com</p>
              <p class="hidden md:block text-gray-600">(541) 426-2677</p>
              <a href="tel:5414262677" class="md:hidden block text-gray-600">(541) 426-2677</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>