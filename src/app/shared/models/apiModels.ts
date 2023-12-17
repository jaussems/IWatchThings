export interface Movie {
    page:         number;
    results:      Result[];
    totalPages:   number;
    totalResults: number;
}

export interface Result {
    adult:            boolean;
    backdropPath:     string;
    id:               number;
    title:            string;
    originalLanguage: string;
    originalTitle:    string;
    overview:         string;
    poster_path:       string;
    mediaType:        MediaType;
    genreIDS:         number[];
    popularity:       number;
    release_date:      Date;
    video:            boolean;
    voteAverage:      number;
    voteCount:        number;
}

export enum MediaType {
    Movie = "movie",
}
