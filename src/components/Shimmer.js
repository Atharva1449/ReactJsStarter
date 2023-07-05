import { CardTemplate } from "./Card";

const Shimmer=()=>{
    return ( 
        <div className="shimmerRestaurantCardsList">{
        Array(10).fill("").map((e,key)=>{return ( 
            
            <div className="shimmerCard">
            <h2><br/></h2>
            <img ></img>
            <h3> <br/>   </h3>
            <h4> <br/>   </h4>
          </div>)
        })}
</div>
    );
}

export default Shimmer;