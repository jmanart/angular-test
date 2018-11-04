import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SigninService } from '../signin.service';
import { UserCredentials } from '../user-credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private signinService: SigninService) { }

  public signin() {
    const signinCredentials = new UserCredentials();
    signinCredentials.email = this.email.value;
    signinCredentials.password = this.password.value;

    this.signinService.signIn(signinCredentials);
  }
}
