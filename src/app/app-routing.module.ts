import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { SummaryComponent } from './components';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'summary',
    component: SummaryComponent,
  },
  {
    path: 'calendar',
    loadChildren: () => import('./modules/calendar/calendar.module').then(m => m.CalendarModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'summary',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
