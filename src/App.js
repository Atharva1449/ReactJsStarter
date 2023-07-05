import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js"
import ContactUs from "./components/About.js";
import {createBrowserRouter,RouterProvider} from "react-router-dom";


const  root=ReactDOM.createRoot(document.getElementById("root"));



const AppLayout=()=>{
  return(
    <>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
    </>
  );
  
}
const routing=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    

  },
  {
    path:"/about",
    element:<About/>,
  },
   {
    path:"/contact",
    element:<ContactUs/>,
  }
]);
root.render(<RouterProvider router={routing}/>);