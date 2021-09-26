import './DetailsCard.css';

const DetailsCard = ({ details }) => {
  if (!details) {
    details = {title: "nothing selected"}
  }


  const addToSaved = () => {
    localStorage.setItem(`${details.mal_id}`, JSON.stringify(details))
  }
  
  return (
    <article className="details-card">
      <img className="details-img" src={details.image_url} alt={`${details.title} poster`}/>
      <h3>{details.title}</h3>
      <p>{details.synopsis}</p>

      <button onClick={addToSaved}>Save</button>
    </article>
  )
}

export default DetailsCard;

//{
// request_hash: "request:anime:3727a1104f5b6a68dc7d6d9a7f108e0e116ea3e4",
// request_cached: true,
// request_cache_expiry: 154078,
// mal_id: 22419,
// url: "https://myanimelist.net/anime/22419/Acchi_Kocchi",
// image_url: "https://cdn.myanimelist.net/images/anime/1031/104174.jpg",
// trailer_url: null,
// title: "Acchi Kocchi",
// title_english: null,
// title_japanese: "あっちこっち",
// title_synonyms: [
// "Atchi Kotchi",
// "Here and There"
// ],
// type: "Movie",
// source: "Original",
// episodes: 1,
// status: "Finished Airing",
// airing: false,
// aired: {
// from: "1962-01-01T00:00:00+00:00",
// to: null,
// prop: {
// from: {
// day: 1,
// month: 1,
// year: 1962
// },
// to: {
// day: null,
// month: null,
// year: null
// }
// },
// string: "Jan 1, 1962"
// },
// duration: "20 min",
// rating: "R - 17+ (violence & profanity)",
// score: 7.09,
// scored_by: 1632,
// rank: 3356,
// popularity: 5890,
// members: 7552,
// favorites: 38,
// synopsis: "One of Yoji Kuri's short films.",
// background: null,
// premiered: null,
// broadcast: null,
// related: { },
// producers: [ ],
// licensors: [ ],
// studios: [ ],
// genres: [
// {
// mal_id: 5,
// type: "anime",
// name: "Avant Garde",
// url: "https://myanimelist.net/anime/genre/5/Avant_Garde"
// }
// ],
// explicit_genres: [ ],
// demographics: [ ],
// themes: [ ],
// opening_themes: [ ],
// ending_themes: [ ],
// external_links: [ ]
// }

    // const savedAnime = {
    //   mal_id: details.mal_id,
    //   title: details.title,
    //   synopsis: details.synopsis,
    //   image_url: details.image_url,
    //   type: details.type
    // }