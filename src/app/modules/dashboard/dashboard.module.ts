import { NgModule } from '@angular/core';
import { DashboardComponent } from './component/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ChartsModule } from 'ng2-charts';

// import * as _components from './components';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    ChartsModule,
    DashboardRoutingModule,
    //NgxsModule.forFeature([])
    CommonModule,
    SharedModule,
  ],
})
export class DashboardModule {}
