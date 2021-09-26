import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
// import About from '../About/About';
import WatchPage from '../WatchPage/WatchPage';
import Error from '../Error/Error';

function App() {
  return (
    <Switch>
      <Route exact path="/" className="App">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" className="App">
        <Home />
      </Route>
      <Route exact path="/about" >
        {/* <About /> */}
      </Route>
      <Route exact path="/to-watch" >
        <WatchPage />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
    
    );
}

export default App;
