import "./global.css"

import { ThemeProvider } from "@material-tailwind/react";


 

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import router from "../src/Routes";
import { RouterProvider } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
