import { createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Main";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

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
    
      
  ]); 