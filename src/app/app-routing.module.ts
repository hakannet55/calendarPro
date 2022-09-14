import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { CalendarMainComponent } from './modules/calendar/component/calendar-main.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'summary',
    component: CalendarMainComponent,
  },
  {
    path: 'user-page',
    loadChildren: () => import('./modules/user-page/user-page.module').then(m => m.UserPageModule),
  },
  {
    path: 'project-manager',
    loadChildren: () => import('./modules/project-manager/project-manager.module').then(m => m.ProjectManagerModule),
  },
  {
    path: 'calendar',
    loadChildren: () => import('./modules/calendar/calendar.module').then(m => m.CalendarModule),
  },
  {
    path: 'setting',
    loadChildren: () => import('./modules/setting/setting.module').then(m => m.SettingModule),
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
