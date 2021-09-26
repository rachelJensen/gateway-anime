import './Hero.css'
import Search from "../Search/Search";

const Hero = ({ selectGenre, title, hasSearch }) => {
  
  return (
    <div className='hero'>
      <h1>{title}</h1>
      {hasSearch && <Search selectGenre={selectGenre}/>}
    </div>
  )
}

export default Hero;