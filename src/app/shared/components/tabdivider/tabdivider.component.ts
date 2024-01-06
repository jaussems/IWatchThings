import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-tabdivider',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tabdivider.component.html',
  styleUrl: './tabdivider.component.scss'
})
export class TabdividerComponent {
  @Input() isSelected?: Boolean = false
  @Output() select = new EventEmitter<Boolean>()

  toggleSelected() {
    this.isSelected = !this.isSelected
    this.select.emit(this.isSelected)
  }
}

