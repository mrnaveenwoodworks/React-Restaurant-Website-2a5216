import React from "react";

const MenuItem = ({ name, description, price, image, category }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="md:w-1/3 h-48 md:h-auto relative">
        {image ? (
          <img src="https://images.unsplash.com/photo-1441861539200-6208cf4a122f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwMDh8&ixlib=rb-4.1.0&q=80&w=1080" alt="delicious restaurant dish food plate gourmet" />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">No image available</span>
          </div>
        )}
        {category && (
          <div className="absolute top-0 left-0 bg-yellow-600 text-white text-xs font-bold px-2 py-1 m-2 rounded">
            {category}
          </div>
        )}
      </div>
      
      <div className="p-4 md:w-2/3 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <span className="text-lg font-bold text-yellow-600">${price.toFixed(2)}</span>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            {/* Optional dietary indicators */}
            {name.toLowerCase().includes("vegan") && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">Vegan</span>
            )}
            {name.toLowerCase().includes("spicy") && (
              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded mr-2">Spicy</span>
            )}
            {name.toLowerCase().includes("gluten") && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Gluten-Free</span>
            )}
          </div>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm flex items-center">
            Add to Order
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;