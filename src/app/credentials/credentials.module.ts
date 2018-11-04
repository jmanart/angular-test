import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CredentialsRoutingModule } from './credentials-routing.module';
import { SigninService } from './signin.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    CredentialsRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
  ],
  providers: [
    SigninService,
  ],
  exports: [
    LoginComponent,
    LogoutComponent,
  ]
})
export class CredentialsModule { }
