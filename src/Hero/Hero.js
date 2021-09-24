import './Hero.css'
import Search from "../Search/Search";

const Hero = ({ getAnimesByGenre, selectGenre }) => {
  
  return (
    <div className='hero'>
      <h1>Find your gateway Anime</h1>
      <Search selectGenre={selectGenre}/>
    </div>
  )
}

export default Hero;