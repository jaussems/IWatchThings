import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../shared/service/api.service';
import { Movie } from '../shared/models/apiModels';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.scss'
})
export class GenreComponent implements OnInit {
  results$?: Movie
  genreId?: string
  @Output() setGenreId = new EventEmitter<number>()
  constructor(
    private _apiService: ApiService,
    private route: ActivatedRoute,
    private _router: Router
    
    ) {
      
     
  }
  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params["id"]),
      distinctUntilChanged()
    ).subscribe(param =>  {
        this._apiService.getMovies().subscribe((data) => {
          this.results$ = data
          let filtered = this.results$?.results.filter((movie) => {
            return movie.genre_ids.includes(Number(param))
            })
            this.results$.results = filtered

        })
      }
    )
  }
 
  navigateMovie(movieId: Number) {
    this._router.navigateByUrl(`home/detail/${movieId}`)
  }

  getPoster(posterPath: String): String {
    return `https://image.tmdb.org/t/p/original/${posterPath}`
  }
}
