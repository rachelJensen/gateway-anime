import './Error.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Error = ({ error }) => {
  return (
     <div>
      {!error && <Header hasSearch={false} title="Oops!"/>}
      {error ? <h2 className="error-msg" >Oh no! Something went wrong. Please try refreshing the page.</h2> : <h2  className="error-msg">Page  not found</h2>}
       <Link to="/"className="return" >Return home</Link>
     </div>
  )
}

export default Error;

Error.propTypes = {
  error: PropTypes.string
};