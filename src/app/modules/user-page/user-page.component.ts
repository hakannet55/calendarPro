import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataManageService } from 'src/app/services/data-manage.service';
import { ProjectModel, SelectionOptionModel, UserModel } from '../../shared/models/ecommon-models';
import snq, { getData } from '../../shared/utils/common-utils';

@Component({
  selector: 'user-page-component',
  templateUrl: './user-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  projeler: ProjectModel[] = [];

  constructor(private dataManageService: DataManageService) {}

  ngOnInit(): void {
    this.projeler = getData().project;
  }

  getDataList(): UserModel[] {
    return (snq(() => getData().users) || []).map(i => ({ ...i, projeler: this.getProjeFromUser(i) }));
  }

  clickShowCreateProjectForm(): void {
    this.showCreateForm = true;
  }

  removePersonelFromList(i: number): void {
    if (confirm('silinsin mi?')) {
      this.dataManageService.removePersonel(i);
    }
  }

  saveNew(): void {
    //, detail: this.personelDetail
    this.dataManageService.addPersonel({ name: this.personelName, brans: this.personelBrans });
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
}
