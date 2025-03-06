import { Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { AboutComponent } from './views/about/about.component';
import { VisitorLayoutComponent } from './layouts/visitor-layout/visitor-layout.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [{
    path: '', component: VisitorLayoutComponent, children: [
      { path: '', component: LandingComponent },
      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent }
    ]
  }];
