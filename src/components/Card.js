import { cloudinaryImagePretext } from "../constants";
export const CardTemplate=({name,cloudinaryImageId,cuisines,avgRating})=>{
  
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={cloudinaryImagePretext+cloudinaryImageId}></img>
        <h3>{cuisines.join(" ,")}</h3>
        <h4>{avgRating}</h4>
      </div>
    );
  }