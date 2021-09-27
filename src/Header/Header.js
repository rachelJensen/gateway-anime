import './Header.css';
import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';


const Header = ({ selectGenre, title, hasSearch }) => {

  return (
    <header>
      <NavBar />
      <Hero selectGenre={ selectGenre } title={title} hasSearch={hasSearch}/>
    </header>
  )
}

export default Header;

Header.propTypes = {
  selectGenre: PropTypes.func,
  title: PropTypes.string,
  hasSearch: PropTypes.bool
};