import React from "react";
import { useLocation } from "react-router-dom";
import './NavOption.css';

function NavOption({ data }) {
  const location = useLocation();
  console.log(location);

  let setAudio = false;
  let setMiphones = false;
  let setRedmiphones = false;
  let setTv = false;
  let setLaptop = false;
  let setLifestyle = false;
  let setHome = false;
  let setAccessories = false;

  if (location.pathname === "/audio") {
    setAudio = true;
  }
  if (location.pathname === "/miphones") {
    setMiphones = true;
  }
  if (location.pathname === "/redmiphones") {
    setRedmiphones = true;
  }
  if (location.pathname === "/tv") {
    setTv = true;
  }
  if (location.pathname === "/laptops") {
    setLaptop = true;
  }
  if (location.pathname === "/lifestyle") {
    setLifestyle = true;
  }
  if (location.pathname === "/home") {
    setHome = true;
  }
  if (location.pathname === "/accessories") {
    setAccessories = true;
  }

  return (
    <div className="card_content2_main">
      {setAudio && data.audio &&data.audio.map((item,index) =>
       <div className="card_content2" key={index}>
       <img src={item.image}></img>
       <h4>{item.name}</h4>
       <h5>{item.price}</h5>
   </div>
       )}

      {setMiphones && data.miPhones && data.miPhones.map((item,index) =>
        <div className="card_content2" key={index}>
        <img src={item.image}></img>
        <h4>{item.name}</h4>
        <h5>{item.price}</h5>
    </div>
       )}

      {setRedmiphones && data.redmiPhones && data.redmiPhones.map((item,index) =>
       <div className="card_content2" key={index}>
       <img src={item.image}></img>
       <h4>{item.name}</h4>
       <h5>{item.price}</h5>
   </div>
       )}

      {setTv && data.tv && data.tv.map((item,index) => 
       <div className="card_content2" key={index}>
       <img src={item.image}></img>
       <h4>{item.name}</h4>
       <h5>{item.price}</h5>
   </div>
      )}

      {setLaptop && data.laptop && data.laptop.map((item,index) => 
      <div className="card_content2" key={index}>
      <img src={item.image}></img>
      <h4>{item.name}</h4>
      <h5>{item.price}</h5>
  </div>
      )}

      {setLifestyle && data.fitnessAndLifeStyle && data.fitnessAndLifeStyle.map((item,index) =>
       <div className="card_content2" key={index}>
       <img src={item.image}></img>
       <h4>{item.name}</h4>
       <h5>{item.price}</h5>
   </div>
       )}

      {setHome && data.home && data.home.map((item,index) =>
       <div className="card_content2" key={index}>
       <img src={item.image}></img>
       <h4>{item.name}</h4>
       <h5>{item.price}</h5>
   </div>
       )}

      {setAccessories && data.accessories && data.accessories.map((item,index)=>  <div className="card_content2" key={index}>
                <img src={item.image}></img>
                <h4>{item.name}</h4>
                <h5>{item.price}</h5>
            </div>
      )}
    </div>
  );
}

export default NavOption;
