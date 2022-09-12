import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarMainComponent } from './component/calendar-main.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarMainComponent,
    resolve: [],
    data: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
