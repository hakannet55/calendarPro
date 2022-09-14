import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DataManageService } from 'src/app/services/data-manage.service';
import { ProjectModel } from '../../shared/models/ecommon-models';
import snq, { getData } from '../../shared/utils/common-utils';

@Component({
  selector: 'user-page-component',
  templateUrl: './user-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent {
  showCreateForm = false;
  personelName = '';
  personelDetail = '';

  constructor(private dataManageService: DataManageService) {}

  getDataList(): ProjectModel[] {
    return snq(() => getData().users) || [];
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
    console.log(123);
    this.dataManageService.addPersonel({ name: this.personelName });
  }
}
