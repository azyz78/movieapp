import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';


 class Search extends Component {
   constructor(props){
     super(props)
     this.state = {
       rating: 1
     }
   }
  onStarClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue}, () => this.props.rateMovie(this.state.rating));
  }
  render() {
    return (
      <div>
          <input onChange={e => this.props.searchMovie(e.target.value)} type="text" placeholder="Type movie's name" />
          <StarRatingComponent 
            name="rate1" 
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick}
          />
          
        
      </div>
    )
  }
}
export default Search ;


