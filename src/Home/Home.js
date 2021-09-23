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
      selected: null
    }
  }

  componentDidMount = () => {
    this.getAnimesByGenre(genres.awardWinning)
  }

  addAnimes = (animeData) => {
    this.setState({ animes: animeData })
  }
 
  getAnimesByGenre = (genreUrl) => {
    getAnimes(genreUrl)
      .then(data => {
        // console.log(data.results)
        this.addAnimes(data.results)
      })
      .catch(err => console.log(err))
  }
  
  render = () => {
    return (
    <div>
      <Header getAnimesByGenre={this.getAnimesByGenre}/>
      <main className="main-home">
        <DetailsCard selected={this.state.selected}/>
        <Recommendations animes={this.state.animes}/>
      </main>
    </div>
  )}
}

export default Home;