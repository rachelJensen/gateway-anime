import './App.css';
import { genres, getAnimes} from '../apiCalls';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';

function App() {
  return (
    <Route exact path="/" className="App">
      <Home />
    </Route>
  );
}

export default App;
