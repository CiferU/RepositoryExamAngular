import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { from } from 'rxjs';
import { GamersComponent } from './gamers/gamers.component';
import { LoginComponent } from './login/login.component';
import { GamesDetailsComponent } from './games-details/games-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamersComponent,
    LoginComponent,
    GamesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
