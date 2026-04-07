#  ShoppyGlobe

ShoppyGlobe is a modern e-commerce web application built using **React**, **Redux**, **Vite**, and **React Router DOM**. It allows users to browse products, filter by category, search items, view product details, add to cart, and place orders.

---

## Technologies Used

-  React (with Hooks)
-  Vite (for blazing-fast development)
-  Redux Toolkit (for state management)
-  React Router DOM (for navigation)
- DummyJSON API (for product data)

---

##  Project Structure
shoppy-globe/
├── public/
├── src/
│ ├── components/ # UI components (Header, ProductList, CartPage, etc.)
│ ├── context/ # Auth context (for login/logout)
│ ├── hooks/ # Custom hooks like useFetch
│ ├── redux/ # Redux store, slices
│ ├── App.jsx # Main app with routing and lazy loading
│ ├── main.jsx # Entry point
│ └── index.css # Global styles
├── package.json
├── vite.config.js
└── README.md 

---

## Features

-  View and search 100+ products
-  Filter by categories
-  View individual product details
-  Add/remove items to/from cart
-  View cart items and checkout
-  Simple login/logout system (auth state managed via context)
-  Form validations
-  Lazy loading via `React.lazy`
-  Error handling (404 page, fetch errors)
-  Responsive UI (mobile & desktop)

---

##  Installation

```bash
# Clone the repository
git clone 

#Git
https://github.com/rahulgupta67697/Shoppy-GlobeApp

# Navigate into the project folder
cd shoppy-globe

# Install dependencies
npm install

# Run the development server
npm run dev

