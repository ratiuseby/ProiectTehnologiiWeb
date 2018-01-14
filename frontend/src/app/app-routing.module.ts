
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent , NavbarComponent, RegisterComponent, MainPageComponent, AboutComponent } from './components';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  }, 
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'main-page', component: MainPageComponent
  },
  {
    path: 'about',component: AboutComponent
  }
  // otherwise redirect to home
  // { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
