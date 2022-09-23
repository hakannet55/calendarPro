import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataManageService } from 'src/app/services/data-manage.service';
import { ProjectModel, SelectionOptionModel, UserModel } from '../../shared/models/ecommon-models';
import snq, { getData } from '../../shared/utils/common-utils';

@Component({
  selector: 'user-page-component',
  templateUrl: './user-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class UserPageComponent implements OnInit {
  showCreateForm = false;
  personelName = '';
  personelBrans = '';
  personelDetail = '';
  options: SelectionOptionModel[] = [
    { value: 'FrontEnd' },
    { value: 'Backend' },
    { value: 'Analiz' },
    { value: 'Test' },
    { value: 'FullStack' },
  ];
  selectedUser: UserModel;
  projeler: ProjectModel[] = [];
  updateMode = false;

  constructor(private dataManageService: DataManageService) {}

  ngOnInit(): void {
    this.init();
  }

  getDataList(): UserModel[] {
    return (snq(() => getData().users) || []).map(i => ({ ...i, projeler: this.getProjeFromUser(i) }));
  }

  clickShowCreateProjectForm(): void {
    this.showCreateForm = true;
    this.updateMode = false;
  }

  removePersonelFromList(i: number): void {
    if (confirm('silinsin mi?')) {
      this.dataManageService.removePersonel(i);
    }
  }

  saveNew(): void {
    //, detail: this.personelDetail
    if (this.updateMode) {
      const findIndex = this.getDataList().findIndex(i => i.id === this.selectedUser.id);
      this.dataManageService.removePersonel(findIndex);
      this.dataManageService.addPersonel({ name: this.personelName, brans: this.personelBrans });
    } else {
      this.dataManageService.addPersonel({ name: this.personelName, brans: this.personelBrans });
    }
    this.personelBrans = '';
    this.init();
  }

  private getProjeFromUser(user: UserModel): string {
    const projeler: ProjectModel[] = [];
    (this.projeler || []).forEach(proje => {
      if (proje.users.some(i => i.id === user.id)) {
        projeler.push(proje);
      }
    });
    return projeler.map(i => i.name + '-' + i.detail).join(', ');
  }

  updatePersonelFromList(index: number): void {
    this.showCreateForm = true;
    this.selectedUser = this.getDataList().find((item, idx) => index === idx);
    this.personelName = this.selectedUser.name;
    this.personelBrans = this.selectedUser.brans;
    this.updateMode = true;
  }

  private init() {
    this.projeler = getData().project;
    this.showCreateForm = false;
  }
}
