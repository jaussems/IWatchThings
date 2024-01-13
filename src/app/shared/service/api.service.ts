import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Movie, MovieDetails } from '../models/apiModels';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = "https://api.themoviedb.org/3/trending/movie/day" 
  constructor(private _httpClient: HttpClient) { }

  getMovies(): Observable<Movie> {
    return this._httpClient.get<Movie>(`${this.apiUrl}`);
  }

  getMovieDetails(movieId: Number): Observable<MovieDetails> {
    return this._httpClient.get<MovieDetails>(` https://api.themoviedb.org/3/movie/${movieId}`)
  }

  getTVSeries(): Observable<Movie>{
  return this._httpClient.get<Movie>(`https://api.themoviedb.org/3/trending/tv/day`)
 }
  
}
