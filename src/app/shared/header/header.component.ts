import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Genres } from '../models/apiModels';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  dropDownIsShown: Boolean = false;
  genres$?: Genres
  constructor(private _ApiService: ApiService, private _router : Router) {

}

ngOnInit(): void {
  this._ApiService.getGenres().subscribe((data) => {
    this.genres$ = data
  })
}

showDropDown() {
  this.dropDownIsShown = true;
}

hideDropDown () {
  this.dropDownIsShown = false;
}

navigateGenrePage(genreId: number) {
this._router.navigate([`genre/${genreId}`])
}

}
