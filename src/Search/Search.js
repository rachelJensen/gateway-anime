import './Search.css';
import PropTypes from 'prop-types';
import { genres } from '../apiCalls';

const Search = ({ selectGenre }) => {
  
  const genreOptions = Object.keys(genres).map(genre => {
    return (<option id={genre} value={genre} key={genre}>{genre}</option>)
  })

  const chooseGenre = (event) => {
    event.preventDefault();
    const selected = document.getElementById('selectGenre');
    selectGenre(selected.value)
  }
  
  return (
    <div className="search-container">
      <h2>Select a genre</h2>
      <div className="query-container">
        <select className="genres" id="selectGenre" onChange={chooseGenre}>
          {genreOptions}
        </select>
      </div>  
    </div>
  )
}

export default Search;

Search.propTypes = {
  selectGenre: PropTypes.func
};