import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import MovieList from './MovieList'
import AddMovie from './AddMovie'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      movies: [
        {
          title: "Robin des Bois",
          image:
            "https://media.services.cinergy.ch/media/box1600/1b027a6f8df6dc8e6779f3adce12af9f639c3025.jpg",
          year: 2018,
          rating: 2
        },
        {
          title: "Iron Man",
          image:
            "http://fr.web.img3.acsta.net/c_215_290/medias/nmedia/18/70/45/28/19408942.jpg",
          year: 2010,
          rating: 3
        },
        {
          title: "Spider Man",
          image:
            "http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/18/83/19/35/20158079.jpg",
          year: 2012,
          rating: 5
        }
      ],
      keyword: '',
      newRating: 1
    }
  }

  addMovie = newMovie => {
    this.setState({movies: this.state.movies.concat(newMovie)})
  }

  rate = num => {
    this.setState({newRating: num})
  }

  search = text => {
    this.setState({keyword: text})
  }
  render(){
    return (
      <div>
        <Search rateMovie={x => this.rate(x)} searchMovie={aziz => this.search(aziz)}/>
        <AddMovie addNewMovie={info => this.addMovie(info)} />
        <MovieList movies={this.state.movies.filter(el => el.rating >= this.state.newRating  && el.title.toLowerCase().includes(this.state.keyword.toLowerCase().trim()))}/>
      </div>
    )
  }
}

export default App;
