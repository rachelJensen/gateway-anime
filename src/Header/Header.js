import './Header.css';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';


const Header = ({ getAnimesByGenre }) => {

  return (
    <header>
      <NavBar />
      <Hero getAnimesByGenre={ getAnimesByGenre }/>
    </header>
  )
}

export default Header;