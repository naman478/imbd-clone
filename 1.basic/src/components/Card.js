import React from "react";
import Avatar from "./Avatar.js";

  function Card({name,email, ...props}){
    const cardStyle={
        padding:"10px",
        border:"2px solid black",
        display:"flex",
        flexDirection:"row",
        gap:"25px"
      }

    return (
      <div style={cardStyle}>
           <Avatar image={props.image}/>
           <h3>Your name is {name}</h3>
           <p>Your email is {email}</p>
           <p>Your contact is {props.contact}</p>
      </div>
    );
  }
  
  export default Card;