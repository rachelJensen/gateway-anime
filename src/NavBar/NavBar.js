import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
  <nav>
    <Link to="/" className="link" >Home</Link>
    <Link to="/about"className="link" >About</Link>
    <Link to="/to-watch" className="link" >To Watch</Link>
  </nav>
  )
}

export default NavBar;