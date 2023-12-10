import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {


constructor(
  private route: ActivatedRoute,
  private router: Router  ) {}
  id? = ""

  ngOnInit(): void {
    const selectedId  = this.route.snapshot.paramMap.get('id')
    this.id = selectedId ? selectedId : ""
  }

}
