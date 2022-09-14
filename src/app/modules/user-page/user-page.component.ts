import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProjectModel } from '../../models/ecommon-models';
import snq, { getData } from '../../utils/common-utils';
import { DataManageService } from '../../services/data-manage.service';

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

  setDataList(): ProjectModel[] {
    return snq(() => getData().project) || [];
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
    this.dataManageService.addPersonel({ name: this.personelName });
  }
}
