import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { name: "Facebook", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,88H152a24,24,0,0,0-24,24V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="144" x2="160" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>, url: "https://facebook.com" },
    { name: "Instagram", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="32" y="32" width="192" height="192" rx="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="180" cy="76" r="16"/></svg>, url: "https://instagram.com" },
    { name: "Twitter", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><path d="M88,176S32.85,144,40.78,56c0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24H240l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12S72,200,88,176Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>, url: "https://twitter.com" },
    { name: "Pinterest", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><line x1="128" y1="88" x2="96" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M66.7,152A80,80,0,1,1,216,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>, url: "https://pinterest.com" }
  ];
  
  const footerLinks = [
    { section: "About", links: [
      { name: "Our Story", url: "#" },
      { name: "Team", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Press", url: "#" }
    ]},
    { section: "Dining", links: [
      { name: "Menu", url: "#menu" },
      { name: "Reservations", url: "#contact" },
      { name: "Private Events", url: "#" },
      { name: "Gift Cards", url: "#" }
    ]},
    { section: "Info", links: [
      { name: "Contact", url: "#contact" },
      { name: "Hours & Location", url: "#contact" },
      { name: "FAQ", url: "#" },
      { name: "Accessibility", url: "#" }
    ]}
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Footer with Logo and Newsletter */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-gray-700">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-4">La Maison</h2>
            <p className="text-gray-400 mb-6">
              Experience exquisite dining in an elegant atmosphere with our crafted dishes made from the finest ingredients.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-yellow-600 text-white p-2 rounded-full transition-colors duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-white mb-4">Subscribe to our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our special events, seasonal menus, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Middle Footer with Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-gray-700">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.section}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Image Gallery */}
        <div className="py-8 border-b border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-6">Follow @LaMaisonRestaurant</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <a key={item} href="#" className="block overflow-hidden rounded-md hover:opacity-80 transition-opacity duration-300">
                <img src="https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkxNDB8&ixlib=rb-4.1.0&q=80&w=1080" alt="gourmet restaurant food fine dining plated dish elegant" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              © {year} La Maison Restaurant. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-yellow-500 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-yellow-500 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-yellow-500 transition-colors duration-200">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;