import './Recommendations.css';
import Thumbnail from '../Thumbnail/Thumbnail';
import DetailsCard from '../DetailsCard/DetailsCard';


const Recommendations = ({ animes }) => {
  const titles = animes.map(anime => {
    return (
      <Thumbnail anime={anime} />
    )
  })
  
  return (
    <div>
      <DetailsCard />
      <section className="recs-container">
        {titles}
      </section>  
    </div>
  )
}

export default Recommendations;

//https://api.jikan.moe/v3/anime/14713/