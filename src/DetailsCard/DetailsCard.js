import './DetailsCard.css';
import PropTypes from 'prop-types';

const DetailsCard = ({ details, noSave, retrieveSaved }) => {
  const addToSaved = () => {
    localStorage.setItem(`${details.mal_id}`, JSON.stringify(details))
  }

  const deleteCard = (id) => {
    localStorage.removeItem(id)
    retrieveSaved();
  }
  
  return (
    <article className="details-card">
      <div className="card-head">
        <img className="details-img" src={details.image_url} alt={`${details.title} poster`}/>
        <div>  
          <h3>{details.title}</h3>
          <h4 className="type">{details.type}</h4>
          <h4 className="rating">{details.rating}</h4>
          <h4 className="score">{details.score}</h4>
        </div>
      </div>
      <p>{details.synopsis}</p>

      {!noSave && <button className="save" onClick={addToSaved}>Save</button>}
      {noSave && <button onClick={() => {deleteCard(details.mal_id)}}>X</button>}
    </article>
  )
}

export default DetailsCard;

DetailsCard.propTypes = {
  details: PropTypes.object,
  noSave: PropTypes.bool,
  retrieveSaved: PropTypes.func
};