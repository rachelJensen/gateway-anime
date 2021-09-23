import './Home.css';
import Header from '../Header/Header';
import DetailsCard from '../DetailsCard/DetailsCard';
import Recommendations from '../Recommendations/Recommendations';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="main-home">
        <DetailsCard />
        <Recommendations />
      </main>
    </div>
  )
}

export default Home;