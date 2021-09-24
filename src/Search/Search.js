import './Search.css';
import { genres } from '../apiCalls';

const Search = ({ selectGenre }) => {
  
  const genreOptions = Object.keys(genres).map(genre => {
    return (<option id={genre} value={genre}>{genre}</option>)
  })

  const chooseGenre = () => {
    const selected = document.getElementById('selectGenre');
    selectGenre(selected.value)
  }
  
  return (
    <div className="search-container">
      <h3>Select a genre</h3>
      <select className="genres" id="selectGenre">
        {genreOptions}
      </select>
      <button onClick={chooseGenre}>Submit</button>
    </div>
  )
}

export default Search;