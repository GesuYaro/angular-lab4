import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.css' ]
})
export class LoginFormComponent  {
  login = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  print() : void {
    console.log(this.login.value);
    console.log(this.password.value);
  }
}