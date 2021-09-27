import React, { useState, useEffect } from 'react'
import './Home.css';
import Header from '../Header/Header';
import Recommendations from '../Recommendations/Recommendations';
import { genres, getAnimes } from '../apiCalls';
import Error from '../Error/Error';

const Home = () => {
  const [animes, setAnimes] = useState([]);
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('')

  useEffect(() => {
    getAnimesByGenre(genres.awardWinning)
  }, []) 

  useEffect(() => {
    console.log('if this logs more than once I\'m looping')
    getAnimesByGenre(genres[selected])
    setSelected('')
  }, [selected]) 

  const addAnimes = (animeData) => {
    const filterAnime = animeData
      .filter(anime => {
        return !anime.type.includes('OVA', 'ONA', 'Special' )
      })
    
    setAnimes(filterAnime)
  }
 
  const getAnimesByGenre = (genreUrl) => {
    getAnimes(genreUrl)
      .then(data => {
        addAnimes(data.results)
      })
      .catch(err => setError(err.message ))
  }

  const selectGenre = (genre) => {
    setSelected(genre)
  }

  return (
    <div>
      <Header selectGenre={selectGenre} title="Find Your Gateway Anime" hasSearch={true}/>
      {(error && !animes) && <Error error={error}/>}
      {animes ? <Recommendations animes={animes} genre={selected}/>  : <h2>Page Loading</h2>}
    </div>
  )
}

export default Home;