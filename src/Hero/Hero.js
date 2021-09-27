import './Hero.css';
import PropTypes from 'prop-types';
import Search from "../Search/Search";

const Hero = ({ selectGenre, title, hasSearch }) => {
  
  return (
    <div className='hero'>
      <h1>{title}</h1>
      {hasSearch && <Search selectGenre={selectGenre}/>}
    </div>
  )
}

export default Hero;

Hero.propTypes = {
  selectGenre: PropTypes.func,
  title: PropTypes.string,
  hasSearch: PropTypes.bool
};