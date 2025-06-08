import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        {/* The Hero component manages its own height and overflow.
            This section wrapper primarily serves as a navigation target for #home. */}
        <section id="home">
          <Hero />
        </section>

        {/* Menu Section */}
        {/* The Menu component renders its own <section> tag with id="menu" and padding. */}
        <Menu />

        {/* About Section - Defined inline in App.js */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  {/* Image for the About section */}
                  <img src="https://images.unsplash.com/photo-1540544321-a0e92b02d975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjk1ODV8&ixlib=rb-4.1.0&q=80&w=1080" alt="elegant restaurant interior dining room ambiance" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Founded in 1985, La Maison has been serving exquisite cuisine in an elegant atmosphere for over three decades. Our commitment to culinary excellence and exceptional service has made us a destination for food lovers and special occasions.
                  </p>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Every dish is crafted with passion by our expert chefs using the finest ingredients, combining traditional techniques with modern innovation to create unforgettable dining experiences.
                  </p>
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <span className="block text-3xl font-bold text-yellow-600 mb-2">35+</span>
                      <span className="text-gray-500">Years of Excellence</span>
                    </div>
                    <div>
                      <span className="block text-3xl font-bold text-yellow-600 mb-2">1000+</span>
                      <span className="text-gray-500">Wine Selections</span>
                    </div>
                    <div>
                      <span className="block text-3xl font-bold text-yellow-600 mb-2">4.9</span>
                      <span className="text-gray-500">Customer Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Features Section - Defined inline in App.js */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><line x1="96" y1="160" x2="88" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="160" x2="168" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="160" x2="128" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M173.65,65.12A48,48,0,1,1,184,160H72A48,48,0,1,1,82.35,65.12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M80,80a48,48,0,0,1,96,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M200,157.27V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V157.27" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                <h3 className="text-xl font-semibold mt-4 mb-2">Master Chefs</h3>
                <p className="text-gray-400">Internationally trained chefs creating culinary masterpieces</p>
              </div>
              <div className="text-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><line x1="208" y1="16" x2="240" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M216,24,152,72l-40,8L28.69,163.31a16,16,0,0,0,0,22.63l41.37,41.37a16,16,0,0,0,22.63,0L176,144l8-40,48-64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="96" x2="160" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="112" y1="208" x2="48" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                <h3 className="text-xl font-semibold mt-4 mb-2">Premium Wine Selection</h3>
                <p className="text-gray-400">Extensive wine list curated by expert sommeliers</p>
              </div>
              <div className="text-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="48" height="48"><rect width="256" height="256" fill="none"/><line x1="64" y1="64" x2="192" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="12" y1="136" x2="244" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="64" x2="32" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="64" x2="224" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                <h3 className="text-xl font-semibold mt-4 mb-2">Private Dining</h3>
                <p className="text-gray-400">Elegant private rooms for special occasions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* The Contact component renders its own <section> tag with id="contact" and padding. */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
