import './WatchPage.css';
import DetailsCard from '../DetailsCard/DetailsCard';
import Header from '../Header/Header';

const WatchPage = () => {
  const keys = Object.keys(localStorage)
    
  const saved = keys.map(key => {
     return JSON.parse(localStorage.getItem(key));  
    })
    .map(anime => {
      return (<DetailsCard details={anime}/>)
    })  


  return (
    <div>
      <Header />
     {saved}
    </div>
  )
}

export default WatchPage;