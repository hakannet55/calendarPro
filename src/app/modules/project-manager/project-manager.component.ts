import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectModel, SelectionOptionModel, UserModel } from '../../shared/models/ecommon-models';
import { getData, getProjectList } from '../../shared/utils/common-utils';
import { DataManageService } from '../../services/data-manage.service';

@Component({
  selector: 'project-manager-component',
  templateUrl: './project-manager.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProjectManagerComponent implements OnInit {
  showCreateProjectForm = false;
  projectName = '';
  projectDetail = '';
  projeUsers: UserModel[] = [];
  selectedProject: ProjectModel;
  projeUsersOption: SelectionOptionModel[] = [];
  allUserDataList: UserModel[] = [];
  updateMode = false;
  projeList: ProjectModel[] = [];

  constructor(private dataManageService: DataManageService) {}

  ngOnInit(): void {
    //const projeListData: ProjectModel[] = snq(() => getData().project) || [];
    this.init();
  }

  clickShowCreateProjectForm(): void {
    this.showCreateProjectForm = true;
    this.updateMode = false;
    this.projectName = '';
    this.projectDetail = '';
    this.projeUsers = [];
  }

  removeFromList(i: number): void {
    if (confirm('silinsin mi?')) {
      this.dataManageService.removeProject(i);
    }
  }

  saveNewProject(): void {
    if (this.updateMode) {
      const findIndex = this.projeList.findIndex(i => i.id === this.selectedProject.id);
      this.dataManageService.removeProject(findIndex);
      this.dataManageService.addProject({
        name: this.projectName,
        detail: this.projectDetail,
        users: this.projeUsers,
        id: this.selectedProject.id,
      });
    } else {
      this.dataManageService.addProject({ name: this.projectName, detail: this.projectDetail, users: this.projeUsers });
    }
    this.projeUsers = [];
    this.projectName = '';
    this.projectDetail = '';
    this.init();
  }

  addSelectedUser(event: any): void {
    const findUser = this.allUserDataList.find(i => +i.id === +event);
    this.projeUsers.push(findUser);
  }

  removeUser(indx: number): void {
    this.projeUsers = this.projeUsers.filter((i, index) => indx !== index);
  }

  editProje(index: number): void {
    this.showCreateProjectForm = true;
    this.selectedProject = this.projeList.find((item, idx) => index === idx);
    this.projectName = this.selectedProject.name;
    this.projectDetail = this.selectedProject.detail;
    this.projeUsers = this.selectedProject.users;
    this.updateMode = true;
  }

  private init() {
    this.allUserDataList = getData().users;
    this.projeUsersOption = this.allUserDataList.map(i => ({ value: i.id, text: i.name + '-' + i.brans }));
    this.projeList = getProjectList();
    this.showCreateProjectForm = false;
  }
}
