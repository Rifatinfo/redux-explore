import Home from "@/components/ui/Home/Home";
import About from "@/pages/About";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children : [
       {
         path : "/about",
         element : <About/>
       },
       {
         path : "/tasks",
         element : <Tasks/>
       },
       {
         path : "/user",
         element : <User/>
       }
    ]
  },
]);

export default router;