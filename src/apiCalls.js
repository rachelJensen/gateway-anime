const genres = {
  "Award Winning": 'https://api.jikan.moe/v3/search/anime?score=7.5-10.0&genre=5&genre_exclude=15',
  "Fantasy": 'https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=10&genre_exclude=15&genre_exclude=9&genre_exclude=12',
  "Sci-Fi": 'https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=24&genre_exclude=15&genre_exclude=9&genre_exclude=49',
  "Horror": 'https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=14&genre_exclude=15&genre_exclude=9&genre_exclude=49',
  "Romance": 'https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=22&genre_exclude=15&genre_exclude=9&genre_exclude=49',
  "Historical": 'https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=13&genre_exclude=15&genre_exclude=9&genre_exclude=49',
  "Psychological": 'https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=40&genre_exclude=15&genre_exclude=9&genre_exclude=49',
  "Worklife": 'https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=48&genre_exclude=9&genre_exclude=49',
  "Gay": 'https://api.jikan.moe/v3/search/anime?genre=28&genre_exclude=9&genre_exclude=12&score=7.0-10.0',
  "Lesbian": 'https://api.jikan.moe/v3/search/anime?genre=26&genre_exclude=9&genre_exclude=12&score=7.0-10.0',
  "Comedy": 'https://api.jikan.moe/v3/search/anime?genre=4&genre_exclude=15&genre_exclude=9&genre_exclude=12&score=8.0-10.0',
  "For Women": 'https://api.jikan.moe/v3/search/anime?genre=43&score=8.0-10.0',
  "Sports": 'https://api.jikan.moe/v3/search/anime?genre=30&genre_exclude=15&genre_exclude=9&genre_exclude=49&score=8.0-10.0'
}


const getAnimes = (url) => {
  return fetch(url)
    .then(res => {
      if (res.status < 400) {
        return res.json();
      } else {
        return Promise.reject(res.status)
      }
    })
}


export { genres, getAnimes };