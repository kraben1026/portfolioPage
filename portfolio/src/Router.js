import { createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Projects from "./Pages/Projects/Projects";
import About from "./Pages/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
