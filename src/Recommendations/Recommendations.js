import React, { useState } from 'react';
import './Recommendations.css';
import Thumbnail from '../Thumbnail/Thumbnail';
import DetailsCard from '../DetailsCard/DetailsCard';
import { getAnimes } from '../apiCalls'


const Recommendations = ({ animes }) => {
  const [details, setDetails] = useState(null)

  // const filterAnime = animes.filter(anime => {
  //   return !anime.rated.includes('Rx')
  // }).filter(anime => {
  //   return !anime.type.includes('OVA', 'ONA', 'Special' )
  // })

  // console.log(animes)
  // console.log(filterAnime)

  const getDetails = (url) => {
    getAnimes(url)
      .then(data => setDetails(data))
      // .then(data => console.log(details))
  }
  
  const titles = animes.map(anime => {
    return (
      <Thumbnail anime={anime} getDetails={getDetails} />
    )
  })
  
  return (
    <main className="main-home">
      <section className="details-sect">
        {details && <DetailsCard details={details}/>}
      </section>
      <section className="recs-container">
        {titles}
      </section>  
    </main>
  )
}

export default Recommendations;

//https://api.jikan.moe/v3/anime/14713/