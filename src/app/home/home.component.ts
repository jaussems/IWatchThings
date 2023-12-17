import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/service/api.service';
import { Movie } from '../shared/models/apiModels';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  results$?: Movie
  ngOnInit(): void {
    this.getPosts()
  }
  
  getPosts() {
    this.apiService.getMovies().subscribe((data: Movie) => {
      this.results$  = data
    })
    console.log(this.results$?.results[0].release_date.getFullYear)
  }

  navigateMovie(movieId: Number) {
    this.router.navigateByUrl(`home/detail/${movieId}`)
  }

  getPoster(posterPath: String): String {
    return `https://image.tmdb.org/t/p/original/${posterPath}`
  }

  // getMovieDetails(movieId) {
  //   return
  // }


}
