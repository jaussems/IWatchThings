import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss'
})
export class LoginformComponent implements OnInit {
loginForm = new FormGroup(
  {
  username:  new FormControl<string>(""),
  password:  new FormControl<string>("")
  }
)

ngOnInit(): void {
  this.loginForm.controls.username.valueChanges.subscribe((inputValue) => {
    console.log(`Username input value: ${inputValue}`)
  })

  this.loginForm.controls.password.valueChanges.subscribe((inputValue) => {
    console.log(`Password input value: ${inputValue}`)
  })

}


}
