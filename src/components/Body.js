import { CardTemplate } from "./Card.js";
import { restaurantList } from "../constants.js"
import { useState } from "react";
function filterSearchtext(searchTextValueParam,restaurantListDataParam){
    return restaurantList.filter((restaurantListDataParam2)=>
    ( restaurantListDataParam2.data.name.includes(searchTextValueParam)));
   }
   
const Body=()=>{
    const [restaurantListData,setRestaurantListData]=useState(restaurantList);
    const [searchTextValue,setSearchTextValue]=useState();
  
    return (
        <>
        <input
        type="text"
        placeholder="Type search text"
        value={searchTextValue}
        onChange={(e)=>{setSearchTextValue(e.target.value);}}
        ></input>
        <button
        onClick={ ()=>{
        setRestaurantListData(filterSearchtext(searchTextValue,restaurantListData))}
        }
        >Search for {searchTextValue}
        </button>
      <div className="restaurantCardsList">
        { restaurantListData.map((restaurantListsparam)=>{return <CardTemplate {...restaurantListsparam.data} key={restaurantListsparam.data.id}/>})}
        
     
  </div></>
    );
  }

  export default Body;