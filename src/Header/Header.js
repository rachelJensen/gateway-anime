import './Header.css';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';


const Header = ({ getAnimesByGenre, selectGenre }) => {

  return (
    <header>
      <NavBar />
      <Hero getAnimesByGenre={ getAnimesByGenre } selectGenre={ selectGenre } />
    </header>
  )
}

export default Header;