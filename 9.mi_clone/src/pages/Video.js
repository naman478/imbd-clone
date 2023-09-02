import React from 'react'
import './Video.css';

function Video({videos}) {
  return (
    <div className="video_container">
        <div>
          <img src={videos[0].image}></img>
          <p>{videos[0].name}</p>
        </div>

        <div>
          <img src={videos[1].image}></img>
          <p>{videos[1].name}</p>
        </div>

        <div>
          <img src={videos[2].image}></img>
          <p>{videos[2].name}</p>
        </div>
    </div>
  )
}

export default Video