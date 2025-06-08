const menuItems = [
  {
    category: "Appetizers",
    items: [
      {
        id: 1,
        name: "Bruschetta al Pomodoro",
        description: "Grilled artisanal bread topped with fresh tomatoes, basil, garlic, and extra virgin olive oil",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1513844316321-dd2466411c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwMjN8&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        id: 2,
        name: "Calamari Fritti",
        description: "Crispy fried calamari served with lemon aioli and marinara sauce",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1729707691140-d0a5a1d2bb7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwMjV8&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        id: 3,
        name: "Caprese Salad",
        description: "Fresh mozzarella, heirloom tomatoes, and basil with balsamic glaze",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1508094427028-b1e27931dddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwMjd8&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    category: "Main Courses",
    items: [
      {
        id: 4,
        name: "Osso Buco",
        description: "Braised veal shanks with saffron risotto and gremolata",
        price: 38.99,
        image: "https://images.unsplash.com/photo-1648146299257-080ffe5968f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwMzB8&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        id: 5,
        name: "Grilled Sea Bass",
        description: "Mediterranean sea bass with herb butter, roasted vegetables",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1500828131278-8de6878641b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwMzJ8&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        id: 6,
        name: "Truffle Risotto",
        description: "Creamy Arborio rice with black truffle, parmesan, and wild mushrooms",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1543342246-902dab6a7081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwMzN8&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    category: "Pasta",
    items: [
      {
        id: 7,
        name: "Linguine alle Vongole",
        description: "Linguine with fresh clams, white wine, garlic, and parsley",
        price: 26.99,
        image: "https://images.unsplash.com/photo-1575330719343-23de81f5b995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwMzZ8&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        id: 8,
        name: "Pappardelle al Ragù",
        description: "Wide ribbon pasta with slow-cooked beef ragù and aged pecorino",
        price: 27.99,
        image: "https://images.unsplash.com/photo-1616443588989-b9f97fd43467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwMzh8&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    category: "Desserts",
    items: [
      {
        id: 9,
        name: "Tiramisu",
        description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwNDB8&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        id: 10,
        name: "Crème Brûlée",
        description: "Vanilla bean custard with caramelized sugar crust",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1710942876152-e3fb9fe1fb81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwNDJ8&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        id: 11,
        name: "Chocolate Fondant",
        description: "Warm chocolate cake with molten center, served with vanilla gelato",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1649308401368-a68b77116605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwNDN8&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    category: "Beverages",
    items: [
      {
        id: 12,
        name: "Italian Wine Selection",
        description: "Curated selection of premium Italian wines (by glass)",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1491143561745-2ad58c7f0de5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwNDV8&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        id: 13,
        name: "Artisanal Cocktails",
        description: "Handcrafted seasonal cocktails using premium spirits",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkzNjkwNDZ8&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  }
];

export default menuItems;