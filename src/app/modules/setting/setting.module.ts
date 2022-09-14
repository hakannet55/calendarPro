import { NgModule } from '@angular/core';
// import * as _components from './components';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting.routing.module';

@NgModule({
  declarations: [SettingComponent],
  imports: [
    SettingRoutingModule,
    //NgxsModule.forFeature([])
    CommonModule,
    SharedModule,
  ],
})
export class SettingModule {}
