import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProjectModel } from '../../models/ecommon-models';
import snq, { getData } from '../../utils/common-utils';
import { DataManageService } from '../../services/data-manage.service';

@Component({
  selector: 'project-manager-component',
  templateUrl: './project-manager.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectManagerComponent {
  showCreateProjectForm = false;
  projectName = '';
  projectDetail = '';

  constructor(private dataManageService: DataManageService) {}

  setDataList(): ProjectModel[] {
    return snq(() => getData().project) || [];
  }

  clickShowCreateProjectForm(): void {
    this.showCreateProjectForm = true;
  }

  removeFromList(i: number): void {
    if (confirm('silinsin mi?')) {
      this.dataManageService.removeProject(i);
    }
  }

  saveNewProject(): void {
    this.dataManageService.addProject({ name: this.projectName, detail: this.projectDetail });
  }
}
