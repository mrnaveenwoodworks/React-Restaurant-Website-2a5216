import React, { useState } from "react";
import MenuItem from "./MenuItem";
import menuItems from "../data/menuItems";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...new Set(menuItems.map(category => category.category))];
  
  // Filter menu items based on active category
  const filteredItems = activeCategory === "All"
    ? menuItems.flatMap(category => category.items)
    : menuItems
        .filter(category => category.category === activeCategory)
        .flatMap(category => category.items);

  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully crafted dishes made with the freshest ingredients and passion for culinary excellence
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* If All is selected, show categories with their items */}
        {activeCategory === "All" ? (
          <div>
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-300 pb-2">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.items.map((item) => (
                    <MenuItem
                      key={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                      category={category.category}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // If specific category is selected, show just those items
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                category={activeCategory}
              />
            ))}
          </div>
        )}

        {/* Daily special banner */}
        <div className="mt-12 bg-gradient-to-r from-yellow-600 to-yellow-800 p-6 rounded-lg shadow-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Chef's Daily Special</h3>
          <p className="mb-4">
            Ask your server about our daily special dish prepared with seasonal ingredients
          </p>
          <div className="flex justify-center items-center">
            <div className="w-full lg:w-1/2 lg:pr-4">
              <img src="https://images.unsplash.com/photo-1474898856510-884a2c0be546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwNjZ8&ixlib=rb-4.1.0&q=80&w=1080" alt="chef preparing gourmet dish in restaurant kitchen" />
            </div>
            <div className="hidden lg:block lg:w-1/2 text-left pl-4">
              <p className="text-lg font-bold">Today's Special:</p>
              <p className="italic">Pan-seared duck breast with orange glaze, served with wild mushroom risotto and seasonal vegetables</p>
              <p className="mt-2 text-xl font-bold">$42.99</p>
            </div>
          </div>
        </div>

        {/* Reservation note */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 italic">
            For parties of 6 or more, we recommend making a reservation
          </p>
          <button className="mt-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-md flex items-center mx-auto">
            Reserve a Table
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="24" x2="176" y2="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="80" y1="24" x2="80" y2="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="40" y1="88" x2="216" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="84 132 100 124 100 180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M138.14,132a16,16,0,1,1,26.64,17.63L136,180h32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;