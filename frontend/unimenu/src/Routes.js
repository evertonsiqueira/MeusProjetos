import * as React from "react";
import { Login } from "./Components/Login";

import {
  createBrowserRouter,
  
} from "react-router-dom";
import { SignIn } from "./Components/Pages/SignIn";


const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login/>,
    },

    {
        path:"/signin",
        element:<SignIn/>,
    },
])

export default router;