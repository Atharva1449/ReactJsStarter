import React from "react";
import ReactDOM from "react-dom/client";
const  root=ReactDOM.createRoot(document.getElementById("root"));
const Title=()=>{
  return(
    <h1>Food Tu amas</h1>
  );
}

const Header=()=>{
  return (
    <div >
      <Title></Title>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
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