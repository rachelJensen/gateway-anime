import './About.css';
import Header from '../Header/Header';

const About = () => {
  return (
    <div>
      <Header title="Your Gateway Anime" hasSearch={false} />
      <section className="about-container">
        <h5>About Your Gateway Anime</h5>
        <p>There is much more to the world of anime than battle-based kid shows and Studio Ghibli art films. This site aims to help you, the anime curious explorer, discover a curated selection of anime titles without wading through an endless sea of content. While limited, the animes offered here represent shows aimed at adults with high ratings--a good starting place for someone new to anime or looking for their next great watch.</p>
        <p>All data on this app is cited from <a href="https://myanimelist.net/">My Anime List</a>, another great resource if you're ready for more.</p>
        <p>The fabulous header image is the work of <a href="https://unsplash.com/@ryanqyao">Ryan Yao</a>.</p>
      </section>
    </div>

  )
}

export default About;