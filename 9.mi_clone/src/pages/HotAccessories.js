import React from "react";
import "./HotAccessories.css";

function HotAccessories({ cards, cover }) {
    {
        console.log(cards);
    }
  return (
    <div className="div">
      <div className="cover">
        <img src={cover} />   
      </div>

      <div className="div2">
        {
           cards && cards.map((item,index)=>(
            <div className="card_content" key={index}>
                <img src={item.image}></img>
                <h4>{item.name}</h4>
                <h5>{item.price}</h5>
            </div>
             
            ))
        }
      </div>
    </div>
  );
}

export default HotAccessories;
