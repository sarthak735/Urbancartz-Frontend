import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/Navbar1/about/About";
import Contact from "./Components/Navbar1/contact/Contact";
import HelpCenter from "./Components/Navbar1/helpCenter/HelpCenter";
import Logins from "./Pages/Logins.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import Shop from "./Pages/Shop.jsx";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "product",
        element: <Product />,
        children: [
          {
            path: ":productId",
            element: <Product />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "mens",
        element: <ShopCategory banner={men_banner} category="men" />,
      },
      {
        path: "womens",
        element: <ShopCategory banner={women_banner} category="women" />,
      },
      {
        path: "kids",
        element: <ShopCategory banner={kid_banner} category="kid" />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "help",
        element: <HelpCenter />,
      },
    ],
  },
  {
    path: "login",
    element: <Logins />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
