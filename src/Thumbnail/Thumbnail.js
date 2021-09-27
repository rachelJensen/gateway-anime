import './Thumbnail.css';
import PropTypes from 'prop-types';

const Thumbnail = ({ anime, getDetails }) => {
  return (
    <div className="thumbnail" id={anime.mal_id} >
        <img src={anime.image_url} className="thumbnail-img" alt={`${anime.title} cover`}/>
        <h4>{anime.title}</h4>
        <button className="detail-btn" onClick={() => {getDetails(`https://api.jikan.moe/v3/anime/${anime.mal_id}`)}}>Learn more</button>
    </div>
  )
}

export default Thumbnail;

Thumbnail.propTypes = {
  getDetails: PropTypes.func,
  anime: PropTypes.object
};