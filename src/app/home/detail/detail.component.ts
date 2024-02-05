import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../../shared/service/api.service';
import { Movie, MovieDetails, Result } from '../../shared/models/apiModels';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
details$?: MovieDetails

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private _apiServce: ApiService,
  private sanitizer: DomSanitizer
  ) {}

  id? = ""
  movieTrailerId: string = ""
  ngOnInit(): void {
    const selectedId  = this.route.snapshot.paramMap.get('id')
    this.id = selectedId ? selectedId : ""
    this._apiServce.getMovieDetails(Number(this.id)).subscribe((data) => {
      console.log(data)
      this.details$ = data

      if(data) {
        this._apiServce.getFilmTrailers(this.details$?.id).subscribe((data) => {
          console.log(`film Trailer data : ${data}`)
          let ytlink = `https://www.youtube.com/embed/` + data.results[0].key
          //this.youtubeFrame.src = ytlink
          this.movieTrailerId = ytlink
          console.log(`${this.movieTrailerId}`)
          
        })
      }
    })
  }

  getPoster(posterPath: String): String {
    return `https://image.tmdb.org/t/p/original/${posterPath}`
  }

  setIFrameLink() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.movieTrailerId)
  }

 
}
