import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = `https://api.themoviedb.org/3/trending/movie/day`
  constructor(private _httpClient: HttpClient) { }

  getMovies(): Observable<any> {
    return this._httpClient.get<any>(`${this.apiUrl}`);
  }

  getPhoto(): Observable<any> {
    return this._httpClient.get<any>(`${"https://api.themoviedb.org/3/trending/movie/day/z6OkT7XjzSrgstiTlld0jUvME9y.jpg"}`)
  }

  
}
