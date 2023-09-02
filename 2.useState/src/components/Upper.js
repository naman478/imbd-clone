import React, { useState } from 'react'
import './Upper.css';

function Upper() {
  let [text,setText]=useState('');

  function convertTextU(){
     let newText=text.toUpperCase();
     setText(newText);
  }

  function convertTextL(){
    let newText=text.toLowerCase();
    setText(newText);
 }

 function clearText(){
  setText("");
}

  function updateText(e){
      setText(e.target.value);
  }

  function darkMode(){
    
  }

  return(
    <>
    <div className='flexBox'>
    <div>
        <h3>Lower to uppercase converter </h3>
        <textarea value={text} rows="10" 
        onChange={updateText}></textarea>
      </div>

      <div className="words">
        <h3>Summary of your text </h3>
        <p>Words count {text.split(" ").length} </p>
        <p>letters count {text.length-text.split(" ").length+1} </p>
        <p>Your reading time {0.008*text.split(" ").length}</p>
     </div>
    </div>
      
      <div>
        <button className= 'btn' onClick={convertTextU}>convertToUpper</button>
        <button className= 'btn' onClick={convertTextL}>convertToLower</button>
        <button className= 'btn' onClick={clearText}>clearText</button>
        <button className= 'btn' onclick={darkMode}>darkMode</button>
     </div>
    </>
  );
}

export default Upper