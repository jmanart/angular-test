import { Component } from '@angular/core';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private signinService: SigninService) { }

  public signout() {
    this.signinService.signOut();
  }
}
