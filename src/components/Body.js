import { CardTemplate } from "./Card.js";
import { restaurantList } from "../constants.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";

function filterSearchtext(searchTextValueParam,restaurantListDataParam){
    return restaurantListDataParam.filter((restaurantListDataParam2)=>
    ( restaurantListDataParam2.data.name.includes(searchTextValueParam)));
   }
   
const Body=()=>{
    const [restaurantListData,setRestaurantListData]=useState([]);
const [restaurantFilterData,setRestaurantFilterData]=useState([]);
    const [searchTextValue,setSearchTextValue]=useState();
  useEffect(()=>{getRestaurants()},[]);

  async function getRestaurants(){
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4598568&lng=73.8430205&page_type=DESKTOP_WEB_LISTING");
    const jsonData=await data.json();
    setRestaurantListData(jsonData?.data?.cards[2]?.data?.data?.cards);
    setRestaurantFilterData(jsonData?.data?.cards[2]?.data?.data?.cards);
    
}

    return (restaurantFilterData.length===0) ? <Shimmer/> : (
        <>
        <input
        type="text"
        placeholder="Type search text"
        value={searchTextValue}
        onChange={(e)=>{setSearchTextValue(e.target.value);}}
        ></input>
        <button
        onClick={ ()=>{
          setRestaurantFilterData(filterSearchtext(searchTextValue,restaurantListData))}
        }
        >Search for {searchTextValue}
        </button>
      <div className="restaurantCardsList">
        { restaurantFilterData.map((restaurantListsparam)=>{return <CardTemplate {...restaurantListsparam.data} key={restaurantListsparam.data.id}/>})}
        
     
  </div></>
    );
  }

  export default Body;