import React ,{useState} from "react";

// function Fruits(){
//   let [fruit,setFruit]=useState('Apple');
//   return(
//      <div>
//         <p>The value of fruit is {fruit} </p>
//         <button onClick={()=>setFruit("papaya")}>papaya</button>
//         <button onClick={()=>setFruit("mango")}>mango</button>
//      </div>
//   );
// }

function Fruits(){
    let [fruit,setFruit]=useState('Apple');
    let [text,setText]=useState('');

    function updateFruit(){
        setFruit(text);
    }

    function updateText(e){
        setText(e.target.value);
    }

    return(
       <div>
          <p>The value of fruit is {text} </p>
          <input type="text" onChange={updateText}/>
          {/* <button onClick={()=>updateFruit()}>submit</button> */}
       </div>
    );
  }

export default Fruits;