import React, { useState } from 'react';
import './Recommendations.css';
import Thumbnail from '../Thumbnail/Thumbnail';
import DetailsCard from '../DetailsCard/DetailsCard';
import { getAnimes } from '../apiCalls'


const Recommendations = ({ animes, genre }) => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState('');

  const getDetails = (url) => {
    getAnimes(url)
      .then(data => {
        if (!data.status) {
          setDetails(data)
        } else {
          setError(data)
        }
      })
  }
  
  const titles = animes.map(anime => {
    return (
      <Thumbnail anime={anime} getDetails={getDetails} key={anime.mal_id}/>
    )
  })

  console.log(details)
  return (
    <main className="main-home">
      {details 
      ? 
      <section className="details-sect">
        <DetailsCard details={details}/>
      </section> 
      : 
      <section className="details-sect">
        <h3>Something went wrong. Please try again</h3>
      </section>}
      <section className="recs-container">
        <h2>{genre}</h2>
        {titles}
      </section>  
    </main>
  )
}

export default Recommendations;
