import { Component, OnInit } from '@angular/core';
import { SigninService } from './credentials/signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Really Simple Coding Test';

  private loggedIn: boolean;

  constructor(private signinService: SigninService) {}

ngOnInit() {
  this.signinService.authorized.subscribe((authorized: boolean) => this.loggedIn = authorized);
}

  public get isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
