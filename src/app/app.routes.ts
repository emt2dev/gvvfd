import { Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { AboutComponent } from './views/about/about.component';
import { VisitorLayoutComponent } from './layouts/visitor-layout/visitor-layout.component';
import { LoginComponent } from './views/login/login.component';
import { AgencyLayoutComponent } from './layouts/agency-layout/agency-layout.component';
import { DashboardComponent } from './views/agency/dashboard/dashboard.component';
import { DispatchComponent } from './views/agency/dispatch/dispatch.component';
import { CallHistoryComponent } from './views/agency/call-history/call-history.component';
import { RosterComponent } from './views/agency/roster/roster.component';
import { ShiftsComponent } from './views/agency/shifts/shifts.component';
import { UsersComponent } from './views/agency/users/users.component';
import { IncidentReportsComponent } from './views/agency/incident-reports/incident-reports.component';

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
      { path: 'mdt', component: DispatchComponent },
      { path: 'call-history', component: CallHistoryComponent },
      { path: 'roster', component: RosterComponent },
      { path: 'shifts', component: ShiftsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'incident-reports', component: IncidentReportsComponent },
    ],
  },
];
