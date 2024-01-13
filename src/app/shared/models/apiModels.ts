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
    vote_average:      number;
    voteCount:        number;
    name?: string;
}

export enum MediaType {
    Movie = "movie",
}


export interface MovieDetails {
    adult:               boolean;
    backdropPath:        string;
    belongsToCollection: BelongsToCollection;
    budget:              number;
    genres:              Genre[];
    homepage:            string;
    id:                  number;
    imdbID:              string;
    originalLanguage:    string;
    originalTitle:       string;
    overview:            string;
    popularity:          number;
    posterPath:          string;
    productionCompanies: ProductionCompany[];
    productionCountries: ProductionCountry[];
    releaseDate:         Date;
    revenue:             number;
    runtime:             number;
    spokenLanguages:     SpokenLanguage[];
    status:              string;
    tagline:             string;
    title:               string;
    video:               boolean;
    voteAverage:         number;
    voteCount:           number;
}



export interface BelongsToCollection {
    id:           number;
    name:         string;
    posterPath:   string;
    backdropPath: string;
}

export interface Genre {
    id:   number;
    name: string;
}

export interface ProductionCompany {
    id:            number;
    logoPath:      null;
    name:          string;
    originCountry: string;
}

export interface ProductionCountry {
    iso3166_1: string;
    name:      string;
}

export interface SpokenLanguage {
    englishName: string;
    iso639_1:    string;
    name:        string;
}
