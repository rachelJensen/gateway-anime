import './WatchPage.css';
import DetailsCard from '../DetailsCard/DetailsCard';
import Header from '../Header/Header';

const WatchPage = () => {
  const keys = Object.keys(localStorage)
    
  const saved = keys.map(key => {
     return JSON.parse(localStorage.getItem(key));  
    })
    .map(anime => {
      return (<DetailsCard details={anime} noSave={true}/>)
    })  


  return (
    <div>
      <Header title="Your Watch List" hasSearch={false}/>
     <section className="to-watch-container">
       {saved}
     </section>
    </div>
  )
}

export default WatchPage;