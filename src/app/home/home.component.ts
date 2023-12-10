import { Component } from '@angular/core';
import { ApiService } from '../shared/service/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private apiService: ApiService) {}


  getPosts() {
    this.apiService.getMovies().subscribe((data: any) => {
      console.log(data)
    })
  }
}
