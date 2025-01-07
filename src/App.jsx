import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/layout/Layout";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/portfolio";

let x = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={x} />;
}

export default App;
