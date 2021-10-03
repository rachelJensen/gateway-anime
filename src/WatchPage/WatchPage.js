import React, { useState, useEffect } from 'react';
import './WatchPage.css';
import DetailsCard from '../DetailsCard/DetailsCard';
import Header from '../Header/Header';

const WatchPage = () => {
  const [toWatch, setToWatch] = useState([])
  
  useEffect(() => {
    retrieveSaved()
  }, [])
  
  const retrieveSaved = () => {
    const keys = Object.keys(localStorage) 
    const saved = keys.map(key => {
       return JSON.parse(localStorage.getItem(key));  
    })
    setToWatch(saved)
  }
    
  const saved = toWatch.map(anime => {
    return (<DetailsCard details={anime} noSave={true} retrieveSaved={retrieveSaved} key={anime.mal_id}/>)
  })  

  return (
    <div>
      <Header title="Your Watch List" hasSearch={false} />
      <section className="to-watch-container">
        {saved}
      </section>
    </div>
  )
}

export default WatchPage;