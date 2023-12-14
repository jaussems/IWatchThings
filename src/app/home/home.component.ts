import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/service/api.service';
import { Movie } from '../shared/models/apiModels';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  results$?: Movie
  ngOnInit(): void {
    this.getPosts()
  }
  
  getPosts() {
    this.apiService.getMovies().subscribe((data: Movie) => {
      this.results$  = data
    })
  }

  getPoster(posterPath: String): String {
    return `https://image.tmdb.org/t/p/original/${posterPath}`
  }


  getPhoto() {
    this.apiService.getPhoto().subscribe((data: any) => {
      console.log(`data: ${data}`)
    })
  }


}
