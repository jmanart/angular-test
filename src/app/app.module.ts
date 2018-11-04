import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CredentialsModule } from './credentials/credentials.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CredentialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
