import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { UserModel } from '../../../shared/models/ecommon-models';
import snq, { getData } from '../../../shared/utils/common-utils';
import { Router } from '@angular/router';
import { DataManageService } from '../../../services/data-manage.service';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  constructor(private route: Router, private dataManageService: DataManageService) {}

  setDataList(): UserModel[] {
    return snq(() => getData().users) || [];
  }

  navigatePersonal() {
    this.route.navigate(['/user-page']);
  }
  navigateProjectPage(): void {
    this.route.navigate(['/project-manager']);
  }
}