import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserCredentials } from './user-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  /**
   * email that was used to log into the application.
   */
  private userEmail: string;

  /**
   * authorized may be subscribed to as a means to know throughout the app
   * whether the user is logged into the system or not.
   */
  public authorized = new BehaviorSubject<boolean>(false);

  constructor() { }

  /**
   * Signs a user into the system. Stores the user provided password separately.
   * NOTE: at this moment this execution is mocked
   * @param userCredentials contains the credentials that will be sent to the server
   */
  public signIn(userCredentials: UserCredentials) {
    if (userCredentials.empty) {
      return;
    }

    this.userEmail = userCredentials.email;

    if (!this.passwordChecks(userCredentials.password)) {
      this.authorized.next(false);
      return;
    }

    this.authorized.next(true);
  }

  /**
   * Signs a user out of the system.
   * NOTE: Depending on the authorization method used on the backend this will imply
   * removing the stored jwt or any other info.
   */
  public signOut() {
    this.authorized.next(false);
  }

  private passwordChecks(password: string): boolean {
    return (password === 'password');
  }

  /**
   * the email that was used to log into the application
   */
  public get email(): string {
    return this.userEmail;
  }
}
