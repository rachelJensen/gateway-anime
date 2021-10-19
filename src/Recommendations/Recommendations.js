import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Recommendations.css';
import Thumbnail from '../Thumbnail/Thumbnail';
import DetailsCard from '../DetailsCard/DetailsCard';
import { getAnimes } from '../apiCalls';


const Recommendations = ({ animes, genre }) => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState('');
  const [canSave, setCanSave] = useState(true);

  const getDetails = (url) => {
    getAnimes(url)
      .then(data => {
        setDetails(data)
        setCanSave(true)
        returnToTop();
      })
      .catch(err => {
        setError(err);
      })
  }

  const returnToTop = () => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }  

  const titles = animes.map(anime => {
    return (
      <Thumbnail anime={anime} getDetails={getDetails} key={anime.mal_id}/>
    )
  })

  return (
    <main className="main">
      <h2 className="rec-header">Recommendations</h2>
      <div className="main-home">
        {(details && !details.message) && 
          <section className="details-sect">
            <DetailsCard details={details} canSave={canSave} setCanSave={setCanSave}/>
          </section> }
        {(details && details.message) && 
          <section className="details-sect">
            <h3>Something went wrong. Please try again</h3>
          </section>}
        <section className="recs-container">
          <h2>{genre}</h2>
          {titles}
        </section>  
      </div>
    </main>
  )
}

export default Recommendations;

Recommendations.propTypes = {
  animes: PropTypes.array,
  genre: PropTypes.string
};