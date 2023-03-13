import { Component } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})

export class LoginScreenComponent {
  inputForm: FormGroup;

  constructor (
    public mail: string = "",
    public pass: string = ""

  ){

  }

  formSubmit() {
    this.
  }
}
