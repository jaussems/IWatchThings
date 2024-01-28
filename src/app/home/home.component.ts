import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/service/api.service';
import { Movie, Result } from '../shared/models/apiModels';
import { Router } from '@angular/router';
import { SwitchBtnComponent } from '../shared/components/switch-btn/switch-btn.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TabdividerComponent } from '../shared/components/tabdivider/tabdivider.component';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SwitchBtnComponent, TabdividerComponent, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  results$?: Movie
  isSelected: Boolean = true;
  toggleControl = new FormControl(false)
  imageCounter = 0;
  isLoading = true;
  sortFormGroup = new FormGroup({
    sortingFilter : new FormControl("")
  })

  inputForm = new FormGroup({
    search : new FormControl<String>('')
  })
  
  get formInput(): FormControl {
    return this.inputForm.controls.search as FormControl
  }

  searchChange() {
    // Wat heb ik nodig ? : Input value die ingetyped wordt en de lijst met huidige films
    // Wat ga ik updaten? Als de lijst met huidige films en hun titel overeenkomen met de zoekterm
    // Op basis van wat ga ik filteren? 
  
    

    
    this.inputForm.controls.search.valueChanges.subscribe((searchValue) => {
     setTimeout(() =>  {

   
     let filtered = this.results$?.results.filter((value) => {
      if(this.isSelected)
        {
          return value.title.toLowerCase().includes(`${searchValue?.toLowerCase()}`)
        }
        else {
          return value.name?.toLowerCase().includes(`${searchValue?.toLowerCase()}`)
        }

      }) || []

      if(this.results$ && searchValue)
      {
        this.results$.results = filtered;
      }
      else {
        if(this.isSelected)
        {
          this.apiService.getMovies().subscribe((value) => this.results$ = value)
        }
        else {
          this.apiService.getTVSeries().subscribe((value) => this.results$ = value)
        }
        }
      }, 890)
    
      })
  
  
  }

  formGroup: FormGroup = new FormGroup({
    toggle: new FormControl(false),
    search: new FormControl("")
  })

 
  
  ngOnInit(): void {
    this.getMovies();
    this.sortByFilter();
    this.searchChange();
  }
  
  getMovies() {
    this.apiService.getMovies().subscribe((data: Movie) => {
      this.results$  = data
    })
    //console.log(this.results$?.results[0].release_date.getFullYear)
  }


  getTvSeries() {
    this.apiService.getTVSeries().subscribe((data: Movie) => {
      this.results$ = data
    })
  }

  toggleDataType() {
    this.isSelected = !this.isSelected
    this.isSelected ?  this.getMovies() : this.getTvSeries()
  }

  setSearch(text: String) {
    this.formGroup.controls["search"].patchValue(text);
  }
  
  toggle() {
    this.formGroup.controls['toggle'].setValue(!this.formGroup.controls['toggle'].value)
  }

  navigateMovie(movieId: Number) {
    this.router.navigateByUrl(`home/detail/${movieId}`)
  }

  getPoster(posterPath: String): String {
    this.imageCounter++
    if(this.imageCounter === this.results$?.results.length)
    {
      this.isLoading = false
    }
    return `https://image.tmdb.org/t/p/original/${posterPath}`
  }

  sortByTitleAscending(a: Result, b : Result) {
    return a.title.localeCompare(b.title);
  }

   sortByTitleDescending(a: Result, b : Result) {
    return b.title.localeCompare(a.title);
  }

  sortByNameOrFallbackASC(a: Result, b: Result) {
    if (a.name && b.name) {
        return a.name.localeCompare(b.name);
    } else {
        return a.name ? -1 : 1;
    }
  }

 sortByNameOrFallbackDESC(a: Result, b: Result) {
    if (a.name && b.name) {
        return b.name.localeCompare(a.name);
    } else {
        return a.name ? -1 : 1;
    }
}
sortByFilter() {
  this.sortFormGroup.controls.sortingFilter.valueChanges.subscribe((value : any) => {
    switch (value) {
        case "name ascending" : {
          if(this.isSelected)
          {
            this.results$?.results.sort((a,b ) => {
              return this.sortByTitleAscending(a , b)
            })
          }
          else {
            this.results$?.results.sort((a,b) => {
              return this.sortByNameOrFallbackASC(a, b)
            })
          }
        }
        break;
        case "name descending" : {
          if(this.isSelected)
          {
            this.results$?.results.sort((a,b ) => {
              return this.sortByTitleDescending(a , b)
            })
          }
        
          else {
            this.results$?.results.sort((a,b) => {
              return this.sortByNameOrFallbackDESC(a, b)
            })
          }
        }
        break;
          case "date ascending" : {
            this.results$?.results.sort((a, b) => (b.release_date < a.release_date ? 1 : -1))
        }
        break;
        case "date descending" : {
          this.results$?.results.sort((a, b) => (a.release_date < b.release_date ? 1 : -1))
        }
        break;
        case "rating" :  {
          this.results$?.results.sort((a, b) => a.popularity - b.popularity )
        }
        break;
        // TODO Fix reset value to previous default value
        default : ""
    }
  })
}


}
