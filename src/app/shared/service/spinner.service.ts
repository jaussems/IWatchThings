import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isLoading: Boolean = false
  show() {
    this.isLoading = true;
  }

  hide () {
    this.isLoading = false;
  }
  constructor() { }
}
