import React from 'react'
import './News.css';

function News({element}) {
  return (
    <div className="cards">
        <img  className="image" src={element.urlToImage} 
        onerror="https://cdn.vox-cdn.com/thumbor/jH_YmcCR9f7StAk2LGXh5Yitq1U=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23988519/acastro_STK056_03.jpg"/>

        <h3>{element.title}</h3>
        <p>{element.description}</p>
        <button onClick={window.open}>Read more...</button>
    </div>
  )
}

export default News