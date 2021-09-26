import './Thumbnail.css';

const Thumbnail = ({ anime, getDetails }) => {
  return (
    <div className="thumbnail" id={anime.mal_id} >
        <img src={anime.image_url} className="thumbnail-img"/>
        <h4>{anime.title}</h4>
        <button onClick={() => {getDetails(`https://api.jikan.moe/v3/anime/${anime.mal_id}`)}}>Learn more</button>
    </div>
  )
}

export default Thumbnail;