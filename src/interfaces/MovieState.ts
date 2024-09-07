


interface MovieState {
  id:number,
  title:string,
  vote_average:number,
  poster_path:string,
}
interface DetailsState {
  id:number,
  title:string,
  vote_average:number,
  poster_path:string,
  backdrop_path:string,
  genres:object[],
  spoken_languages:string,
  production_countries:string,
}
interface TopRateMoviesState {
  id:number,
  poster_path:string,
}