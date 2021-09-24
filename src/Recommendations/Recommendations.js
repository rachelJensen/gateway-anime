import './Recommendations.css';
import Thumbnail from '../Thumbnail/Thumbnail';


const Recommendations = ({ animes }) => {
  const titles = animes.map(anime => {
    return (
      <div>{anime.title}</div>
    )
  })
  
  return (
    <section className="recs-container">
      {titles}
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </section>  
  )
}

export default Recommendations;