import React, { useState } from 'react';
import './Recommendations.css';
import Thumbnail from '../Thumbnail/Thumbnail';
import DetailsCard from '../DetailsCard/DetailsCard';
import { getAnimes } from '../apiCalls'


const Recommendations = ({ animes, genre }) => {
  const [details, setDetails] = useState(null)

  const getDetails = (url) => {
    getAnimes(url)
      .then(data => setDetails(data))
      // .then(data => console.log(details))
  }
  
  const titles = animes.map(anime => {
    return (
      <Thumbnail anime={anime} getDetails={getDetails} key={anime.mal_id}/>
    )
  })
  console.log('genre in Recs', genre)
  
  return (
    <main className="main-home">
     {details && <section className="details-sect">
        <DetailsCard details={details}/>
      </section>}
      <section className="recs-container">
        <h2>{genre}</h2>
        {titles}
      </section>  
    </main>
  )
}

export default Recommendations;

//https://api.jikan.moe/v3/anime/14713/