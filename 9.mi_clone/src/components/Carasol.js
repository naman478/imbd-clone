import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Carasol({start,end}) {
    return (
        <>
          <div>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={4}
              infiniteLoop={true}
              showStatus={false}
            >
              {start.map((item,index) => (
                <div key={index}>
                  <div className="posterImage">
                    <img src={item} />
                  </div>
                </div>
    
              ))}
            </Carousel>
          
          </div>
        </>
      );
}

export default Carasol;
