import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingLayout from "../layouts/LandingLayout";
import Landing from "../pages/Landing";
import About from "../pages/About";
 
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "",
        Component: LandingLayout,
        children: [
          { path: "", Component: Landing },
          { path: "/about", Component: About },
        ],
      },
       
    ],
  },
]);
 

export default router;