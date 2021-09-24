import React, { Component } from 'react'
import './Home.css';
import Header from '../Header/Header';
import DetailsCard from '../DetailsCard/DetailsCard';
import Recommendations from '../Recommendations/Recommendations';
import { genres, getAnimes } from '../apiCalls'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      animes: [],
      selected: ''
    }
  }

  componentDidMount = () => {
    this.getAnimesByGenre(genres.awardWinning)
  }

  componentDidUpdate = () => {
    if (this.state.selected) {
      console.log('this is looping')
      this.getAnimesByGenre(genres[this.state.selected])
      this.setState({ selected: '' })
    }
  }

  addAnimes = (animeData) => {
    this.setState({ animes: animeData })
  }
 
  getAnimesByGenre = (genreUrl) => {
    getAnimes(genreUrl)
      .then(data => {
        this.addAnimes(data.results)
      })
      .catch(err => console.log(err))
  }

  selectGenre = (genre) => {
    this.setState({ selected: genre })
  }
  
  render = () => {
    return (
    <div>
      <Header getAnimesByGenre={this.getAnimesByGenre} selectGenre={this.selectGenre}/>
      <main className="main-home">
        <DetailsCard selected={this.state.selected}/>
        <Recommendations animes={this.state.animes}/>
      </main>
    </div>
  )}
}

export default Home;