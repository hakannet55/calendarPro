import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { UserModel } from '../../../models/ecommon-models';
import snq, { getData } from '../../../utils/common-utils';
import { Router } from '@angular/router';
import { DataManageService } from '../../../services/data-manage.service';

@Component({
  selector: 'calendar-main-component',
  templateUrl: './calendar-main.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarMainComponent {
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
