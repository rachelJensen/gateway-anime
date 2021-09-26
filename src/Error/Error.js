import './Error.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Error = ({ error }) => {
  return (
    <div>
      <Header />
      {error ? <h2>{error}</h2> : <h2>Page not found</h2>}
      <Link to="/" >Return home</Link>
    </div>
  )
}

export default Error;