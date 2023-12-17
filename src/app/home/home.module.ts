import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SwitchBtnComponent } from '../shared/components/switch-btn/switch-btn.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    SwitchBtnComponent,
    NgOptimizedImage
  ]
})
export class HomeModule { }
