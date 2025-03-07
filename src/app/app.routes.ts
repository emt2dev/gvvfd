import { Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { AboutComponent } from './views/about/about.component';
import { VisitorLayoutComponent } from './layouts/visitor-layout/visitor-layout.component';
import { LoginComponent } from './views/login/login.component';
import { AgencyLayoutComponent } from './layouts/agency-layout/agency-layout.component';
import { DashboardComponent } from './views/agency/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: VisitorLayoutComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: 'agency',
    component: AgencyLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'mdt', component: AboutComponent },
      { path: 'call-history', component: AboutComponent },
      { path: 'roster', component: LoginComponent },
      { path: 'shifts', component: LoginComponent },
      { path: 'users', component: LoginComponent },
      { path: 'incident-reports', component: LoginComponent },
    ],
  },
];
