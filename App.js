import React from "react";
import  ReactDOM  from "react-dom/client";
const heading = React.createElement("h1", { id: "yooo" }, "hello"); //so the id and other attribute we did in html we pass here in reeact
const heading2 = React.createElement("h2", { id: "yooo2" }, "hello2"); //so the id and other attribute we did in html we pass here in reeact
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]); //here as it is div tag we are passing h1 and h2 tag but as there are two tags we pass in form of array

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading); //actually heading is an object if you check in consolelog
root.render(container);
