import React from "react";
import  ReactDOM  from "react-dom/client";
//below is react element
const title=(
  <h1 className="h1class">Hello</h1>
);

//below is react function component
const Title2=()=>{
return (
  <h2 className="h2class">Hello2</h2>
);
}

// <Title2/>   this is component composition
//{} in this you can pass any code so the above same line of code can be also printed
//using {Title2()} now why this works coz functional component is basic js function
const Container=()=>{
  return(
    <div>
      {title}
      {2-3}
      <Title2/> 
      {Title2()} 
      <h3>hello3</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(heading); //actually heading is an object if you check in consolelog
root.render(<Container></Container>);
