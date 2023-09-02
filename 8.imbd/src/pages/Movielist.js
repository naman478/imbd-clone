import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MovielistCard from "./MovielistCard";

export default function  Movielist()  {

    const [category, setCategory] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setCategory(data.results))
    }

  return (
    <>
      <div className="poster">
      {/* <h1>{type}...</h1> */}
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={4}
          infiniteLoop={true}
          showStatus={false}
        >
          {category.map((movie) => (
            <div>
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
                </div>

                <div className="popular_movie_content">

                 <h1 className="h1">{movie.original_title}</h1>

                 <div className="middle">
                    <h2>{movie.release_date}</h2>
                    <h2>{ movie.vote_average}<i className="fas fa-star" /></h2>
                 </div>
                
                <div className="p">
                 <p>{movie.overview}</p>
                </div>
               
                </div>
              </div>

          ))}
        </Carousel>
      </div>

      <MovielistCard category={category} type={type}/>
    </>
  );
}

// export default Movielist;




