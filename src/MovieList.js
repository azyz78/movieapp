import React, { Component } from "react";
import StarRatingComponent from 'react-star-rating-component';


export default class MovieList extends Component {
  
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map(el => (
          <div>
            <img src={el.image} className="movie-img"/>
            <h1>{el.title}</h1>
            <p>{el.year}</p>
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={el.rating}
            />
          </div>
        ))}
      </div>
    );
  }
}
