import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = "https://api.themoviedb.org/3/trending/movie/day" 
  constructor(private _httpClient: HttpClient) { }

  getMovies(): Observable<any> {
    return this._httpClient.get<any>(`${this.apiUrl}`);
  }

  getMovieDetails(movieId: Number): Observable<any> {
    return this._httpClient.get<any>(` https://api.themoviedb.org/3/movie/${movieId}`)
  }

  
}
