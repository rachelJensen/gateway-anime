const genres = {
  awardWinning: 'https://api.jikan.moe/v3/search/anime?score=7.5-10.0&genre=5&genre_exclude=15',
  fantasy: 'https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=10&genre_exclude=15&genre_exclude=9&genre_exclude=12',
  scifi: 'https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=24&genre_exclude=15&genre_exclude=9&genre_exclude=49',
  horror: 'https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=14&genre_exclude=15&genre_exclude=9&genre_exclude=49',
  romance: 'https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=22&genre_exclude=15&genre_exclude=9&genre_exclude=49',
  historical: 'https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=13&genre_exclude=15&genre_exclude=9&genre_exclude=49',
  psychological: 'https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=40&genre_exclude=15&genre_exclude=9&genre_exclude=49',
  worklife: 'https://api.jikan.moe/v3/search/anime?score=8.0-10.0&genre=48&genre_exclude=9&genre_exclude=49',
  gay: 'https://api.jikan.moe/v3/search/anime?genre=28&genre_exclude=9&genre_exclude=12&score=7.0-10.0',
  lesbian: 'https://api.jikan.moe/v3/search/anime?genre=26&genre_exclude=9&genre_exclude=12&score=7.0-10.0',
  comedy: 'https://api.jikan.moe/v3/search/anime?genre=4&genre_exclude=15&genre_exclude=9&genre_exclude=12&score=8.0-10.0',
  forWomen: 'https://api.jikan.moe/v3/search/anime?genre=43&score=8.0-10.0',
  sports: 'https://api.jikan.moe/v3/search/anime?genre=30&genre_exclude=15&genre_exclude=9&genre_exclude=49&score=8.0-10.0'
}


const getAnimes = (url) => {
  return fetch(url)
    .then(res => {
      if (res.status < 400) {
        console.log('good response', `${url}`)
        return res.json();
      } else {
        return Promise.reject(res.status)
      }
    })
}


export { genres, getAnimes };