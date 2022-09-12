import { NgModule } from '@angular/core';
// import * as _components from './components';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarMainComponent } from './component/calendar-main.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CalendarMainComponent],
  imports: [
    CalendarRoutingModule,
    //NgxsModule.forFeature([])
    CommonModule,
    SharedModule,
  ],
})
export class CalendarModule {}
