import { NgModule } from '@angular/core';
// import * as _components from './components';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { UserPageComponent } from './user-page.component';
import { UserPageRoutingModule } from './user-page.routing.module';

@NgModule({
  declarations: [UserPageComponent],
  imports: [
    UserPageRoutingModule,
    //NgxsModule.forFeature([])
    CommonModule,
    SharedModule,
  ],
})
export class UserPageModule {}
