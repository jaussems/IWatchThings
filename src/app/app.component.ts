import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { SpinnerService } from './shared/service/spinner.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HttpClientModule, NgOptimizedImage, HeaderComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IWatchThings';
  isSpinning: Boolean = true;
  constructor(private _spinnerService: SpinnerService) {
     this.isSpinning = this._spinnerService.isLoading
  }
}
