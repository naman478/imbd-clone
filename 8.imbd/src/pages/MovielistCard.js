import React from "react";
import "./MovielistCard.css";

function MovielistCard({category,type}) {
  return (
    <>
    <h1 className="heading">{type}<i className="fas fa-angle-double-right" /></h1>
    <div className="cards" id="cards_margin">
    {  
      category.map((movie) => (
      <div className="cards_inside"    style={{
        backgroundImage: `url(${`https://image.tmdb.org/t/p/original${
            movie && movie.backdrop_path
          }`})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // height: '500px',
      }}>

        <div className="cards_content">
          <h1 className="cards_content_heading">{movie.original_title}</h1>

          <div className="cards_content_middle">
            <h3>{movie.release_date}</h3>
            <h3>
              {movie.vote_average}
              <i className="fas fa-star" />
            </h3>
          </div>
        </div>
      </div>
      ))}
    </div>
    </>
  );
}

export default MovielistCard;
