const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const requests = {
  fetchTrending: `trending/all/week?api_key=${API_KEY}&language=zh-TW`,
  fetchNetflixOriginals: `discover/movie?api_key=${API_KEY}&with_networks=213&language=zh-TW`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=zh-TW`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=99`,
  fetchMovieStreamsById: (id: string) =>
    `movie/${id}?api_key=${API_KEY}&language=zh-TW`,
  fetchMovieDetailById: (id: string) => `credit/${id}?api_key=${API_KEY}`,
  fetchMovieCastAndCrewById: (id: string) =>
    `movie/${id}/credits?api_key=${API_KEY}&language=zh-TW`,
  fetchMoviesByParams: (genre: number, year: number, value: number) =>
    `discover/movie?api_key=${API_KEY}&language=zh-TW&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=${
      year === 0 ? "" : year
    }&vote_average.gte=${value}&with_genres=${
      genre === 0 ? "" : genre
    }&with_watch_monetization_types=flatrate`,
  fetchMoviesSimilarById: (id: string) =>
    `movie/${id}/similar?api_key=${API_KEY}&language=zh-TW&page=1`
}

export default requests
