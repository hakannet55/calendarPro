import { NgModule } from '@angular/core';
import { DashboardComponent } from './component/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

// import * as _components from './components';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    //NgxsModule.forFeature([])
    CommonModule,
    SharedModule,
  ],
})
export class DashboardModule {}
