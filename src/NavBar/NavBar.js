import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
  <nav>
    <Link to="/" className="link home" >Home</Link>
    <Link to="/about"className="link about" >About</Link>
    <Link to="/to-watch" className="link watch" >To Watch</Link>
  </nav>
  )
}

export default NavBar;