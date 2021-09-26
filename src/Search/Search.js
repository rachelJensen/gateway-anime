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
      <h2>Select a genre</h2>
      <div className="query-container">
        <select className="genres" id="selectGenre">
          {genreOptions}
        </select>
        <button onClick={chooseGenre}>Submit</button>
      </div>  
    </div>
  )
}

export default Search;