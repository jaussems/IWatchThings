export interface Genres {
    genres: Genre[];
}


export interface Genre {
    id:   number;
    name: string;
}

export enum MovieGenres  {
    ACTION = "Action",
    ADVENTURE = "Adventure",
    ANIMATION = "Animation",
    COMEDY = "Comedy",
    CRIME = "Crime",
    DOCUMENTARY = "Documentary",
    DRAMA = "Drama",
    FAMILY = "Family",
    FANTASY = "Fantasy",
    HISTORY = "History",
    HORROR = "Horror",
    MUSIC = "Music",
    MYSTERY = 'Mystery',
    ROMANCE = "Romance",
    SCIENCEFICTION = "ScienceFiction",
    TVMOVIE = "TvMovie",
    THRILLER = "Thriller",
    WAR = "War",
    WESTERN = "Western"

}

export const allMovieGenres: Record<MovieGenres, Genre> = {
    Action: { id: 28, name : MovieGenres.ACTION},
    Adventure: { id: 12, name: MovieGenres.ADVENTURE },
    Animation: { id: 16, name: MovieGenres.ANIMATION },
    Comedy: { id: 35, name: MovieGenres.COMEDY },
    Crime: { id: 80, name: MovieGenres.CRIME },
    Documentary: { id: 99, name: MovieGenres.DOCUMENTARY },
    Drama: { id: 18, name: MovieGenres.DRAMA },
    Family: { id: 10751, name: MovieGenres.FAMILY },
    Fantasy: { id: 14, name: MovieGenres.FANTASY },
    History: { id: 36, name: MovieGenres.HISTORY },
    Horror: { id: 27, name: MovieGenres.HORROR },
    Music: { id: 10402, name: MovieGenres.MUSIC },
    Mystery: { id: 9648, name: MovieGenres.MYSTERY },
    Romance: { id: 10749, name: MovieGenres.ROMANCE },
    ScienceFiction: { id: 878, name: MovieGenres.SCIENCEFICTION },
    TvMovie: { id: 10770, name: MovieGenres.TVMOVIE },
    Thriller: { id: 53, name: MovieGenres.THRILLER },
    War: { id: 10752, name: MovieGenres.WAR },
    Western: { id: 37, name: MovieGenres.WESTERN },
}


