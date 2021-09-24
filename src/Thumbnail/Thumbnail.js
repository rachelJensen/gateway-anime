import './Thumbnail.css';

const Thumbnail = ({ anime }) => {
  return (
    <div id={anime.mal_id}>
        <img src={anime.image_url} className="thumbnail-img"/>
        <h4>{anime.title}</h4>
        <button onClick={console.log('butts')}>Learn more</button>
    </div>
  )
}

export default Thumbnail;