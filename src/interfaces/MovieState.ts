
export interface MovieState {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  movies: {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
  }[];
}




export interface DetailsState {
  details: {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
    genres: Genre[];
    spoken_languages: Language[];
    production_countries: Country[];
  };
}


export interface Genre {
  id: number;
  name: string;
}

export interface Language {
  iso_639_1: string; 
  name: string;
}

export interface Country {
  iso_3166_1: string; 
  name: string;
}


export interface TopRateMoviesState {
  id: number;
  poster_path: string;
}
