import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../../shared/service/api.service';
import { Movie, MovieDetails, Result } from '../../shared/models/apiModels';


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
  private _apiServce: ApiService
  ) {}
  id? = ""

  ngOnInit(): void {
    const selectedId  = this.route.snapshot.paramMap.get('id')
    this.id = selectedId ? selectedId : ""
    this._apiServce.getMovieDetails(Number(this.id)).subscribe((data) => {
      console.log(data)
      this.details$ = data
    })

  }

}
