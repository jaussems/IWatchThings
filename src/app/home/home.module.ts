import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SwitchBtnComponent } from '../shared/components/switch-btn/switch-btn.component';
import { TabdividerComponent } from '../shared/components/tabdivider/tabdivider.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    SwitchBtnComponent,
    TabdividerComponent,
    NgOptimizedImage
  ]
})
export class HomeModule { }
