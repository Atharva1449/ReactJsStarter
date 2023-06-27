import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

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
root.render(<AppLayout></AppLayout>);