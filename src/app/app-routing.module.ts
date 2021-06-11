import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { GamersComponent } from './gamers/gamers.component';
import { LoginComponent } from './login/login.component';
import { GamesDetailsComponent } from './games-details/games-details.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:"full"},
  {path:'home', component:HomeComponent, pathMatch:"full"},
  {path:'gamers', component:GamersComponent, pathMatch:"full"},
  {path:'login', component:LoginComponent, pathMatch:"full"},
  {path:'details', component:GamesDetailsComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
