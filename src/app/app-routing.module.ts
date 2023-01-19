import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"info/:name/:status", component:InfoComponent},
  {path:"aboutus",component:AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
