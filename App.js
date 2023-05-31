import React from "react";
import ReactDOM from "react-dom/client";
const  root=ReactDOM.createRoot(document.getElementById("root"));
const Title=()=>{
  return(
    <img className="logo" alt="logo" src="https://media.istockphoto.com/id/1208194075/vector/local-craft-food-design-template-local-food-poster-for-restaurant-cooking-and-food-business.jpg?s=612x612&w=0&k=20&c=uIhhmIz_yBy2u-1urD8Dm0bxIt5D30aAgDEr0vvJShk=" alt="food image"></img>
  );
}

const Header=()=>{
  return (
    <div className="navbar" >
      <Title></Title>
      <div className="listElements">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
const Body=()=>{
  return (
<div>body</div>
  );
}
const Footer=()=>{
  return (
    <div>footer</div>
  );
}

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