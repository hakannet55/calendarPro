import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: [],
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
