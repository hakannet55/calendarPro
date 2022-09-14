import { NgModule } from '@angular/core';
// import * as _components from './components';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ProjectManagerComponent } from './project-manager.component';
import { ProjectManagerRoutingModule } from './project-manager.routing.module';

@NgModule({
  declarations: [ProjectManagerComponent],
  imports: [
    ProjectManagerRoutingModule,
    //NgxsModule.forFeature([])
    CommonModule,
    SharedModule,
  ],
})
export class ProjectManagerModule {}
