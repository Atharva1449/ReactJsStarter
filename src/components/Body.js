import { CardTemplate } from "./Card.js";
import { restaurantList } from "../constants.js"
const Body=()=>{
    return (
      <div className="restaurantCardsList">
        { restaurantList.map((restaurantList)=>{return <CardTemplate {...restaurantList.data} key={restaurantList.data.id}/>})}
        
     
  </div>
    );
  }

  export default Body;