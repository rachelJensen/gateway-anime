import React, { Component } from 'react'
import './Home.css';
import Header from '../Header/Header';
import DetailsCard from '../DetailsCard/DetailsCard';
import Recommendations from '../Recommendations/Recommendations';
import { genres, getAnimes } from '../apiCalls';
import Error from '../Error/Error';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      animes: [],
      selected: '',
      error: ''
    }
  }

  componentDidMount = () => {
    this.getAnimesByGenre(genres.awardWinning);
  }

  componentDidUpdate = () => {
    if (this.state.selected) {
      console.log('if this logs more than once I\'m looping')
      this.getAnimesByGenre(genres[this.state.selected])
      this.setState({ selected: '' })
    }
  }

  addAnimes = (animeData) => {
    const filterAnime = animeData
      .filter(anime => {
        return !anime.type.includes('OVA', 'ONA', 'Special' )
      })
    
    this.setState({ animes: filterAnime })
  }
 
  getAnimesByGenre = (genreUrl) => {
    getAnimes(genreUrl)
      .then(data => {
        this.addAnimes(data.results)
      })
      .catch(err => this.setState({ error: err.message }))
  }

  selectGenre = (genre) => {
    this.setState({ selected: genre })
  }
  
  render = () => {
    return (
    <div>
      <Header selectGenre={this.selectGenre} title="Find Your Gateway Anime" hasSearch={true}/>
      {this.state.error && <Error error={this.state.error}/>}
      {this.state.animes ? <Recommendations animes={this.state.animes} genre={this.state.selected}/>  : <h2>Page Loading</h2>}
    </div>
  )}
}

export default Home;