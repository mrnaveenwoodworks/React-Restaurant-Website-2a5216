import React from "react";

const Hero = () => {
  return (
    // Modified: Constrained height to prevent full-page coverage.
    // min-h ensures a minimum visible area, max-h-[60vh] (or 70vh on large screens) limits height.
    // overflow-hidden contains the absolutely positioned children.
    <div className="relative min-h-[300px] max-h-[60vh] lg:max-h-[70vh] overflow-hidden">
      {/* Hero Image Container */}
      {/* This div will be filled by the image, which is expected to use object-cover */}
      <div className="absolute inset-0">
        {/* The IMAGE_PLACEHOLDER will be replaced by an <img> tag.
            It is expected that the generated <img> tag will have classes
            like "w-full h-full object-cover" to ensure it fills this
            container responsively and maintains aspect ratio. */}
        <img src="https://images.unsplash.com/photo-1584589167171-541ce45f1eea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjk1Mzh8&ixlib=rb-4.1.0&q=80&w=1080" alt="elegant restaurant interior with warm lighting and table settings" />
      </div>

      {/* Overlay */}
      {/* This overlay sits on top of the image. */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      {/* z-10 ensures content is above the overlay.
          h-full allows vertical centering within the constrained parent.
          py-8 md:py-12 adds vertical padding to ensure content visibility within the constrained height. */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 py-8 md:py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to La Maison
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Experience exquisite dining in an elegant atmosphere. Our master chefs create unforgettable culinary experiences with the finest ingredients.
        </p>
        <button
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2"
          onClick={() => {
            const menuSection = document.getElementById("menu");
            menuSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>View Our Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="160" x2="96" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="160 112 160 160 112 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
        </button>
      </div>

      {/* Scroll Indicator */}
      {/* z-10 ensures this is also above the overlay. Adjusted bottom positioning for new height. */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="201.97 171.78 128 120 54.03 171.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
      </div>
    </div>
  );
};

export default Hero;
