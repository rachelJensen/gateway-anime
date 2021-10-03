import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
  <nav className="navbar">
    <Link to="/" className="link home" >Home</Link>
    <Link to="/about"className="link about" >About</Link>
    <Link to="/to-watch" className="link watch" >Watch List</Link>
  </nav>
  )
}

export default NavBar;