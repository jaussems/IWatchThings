import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/service/api.service';
import { Movie } from '../shared/models/apiModels';
import { Router } from '@angular/router';
import { SwitchBtnComponent } from '../shared/components/switch-btn/switch-btn.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SwitchBtnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  results$?: Movie
  toggleControl = new FormControl(false)

  formGroup: FormGroup = new FormGroup({
    toggle: new FormControl(false)
  })

  toggle() {
    this.formGroup.controls['toggle'].setValue(!this.formGroup.controls['toggle'].value)
  }
  
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
