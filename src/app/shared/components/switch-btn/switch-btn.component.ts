import { Component, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-btn',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  outputs:['toggle'],
  templateUrl: './switch-btn.component.html',
  styleUrl: './switch-btn.component.scss'
})
export class SwitchBtnComponent {

  @Input() label?: String 
  @Input() formGroup: FormGroup = new FormGroup({
    toggle: new FormControl(false)
  }
  )
  @Input('onToggle') onToggle  = new EventEmitter<boolean>();


  get toggleControl(): FormControl {
    return this.formGroup.get('toggle') as FormControl
  }

}
