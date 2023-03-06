import { createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Main";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog/Blog";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/skills/Skills";

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
        path: "/skills",
        element: <Skills />,
      }, 
  ]); 