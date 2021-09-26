import './App.css';
import { genres, getAnimes} from '../apiCalls';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
// import About from '../About/About';
import WatchPage from '../WatchPage/WatchPage'

function App() {
  return (
    <Switch>

      <Route exact path="/" className="App">
        <Home />
      </Route>
      <Route exact path="/about" >
        {/* <About /> */}
      </Route>
      <Route exact path="/to-watch" >
        <WatchPage />
      </Route>



    </Switch>
    
    );
}

export default App;
