import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TableCol, TableRow, UserModel } from '../../../shared/models/ecommon-models';
import snq, { getData } from '../../../shared/utils/common-utils';
import { Router } from '@angular/router';
import { DataManageService } from '../../../services/data-manage.service';

@Component({
  selector: 'calendar-main-component',
  templateUrl: './calendar-main.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarMainComponent implements OnInit {
  headers: TableCol[] = [{ text: '#' }, { text: 'Personel' }, { text: 'İlerleme' }];
  tableRows: TableRow[] = [];

  constructor(private route: Router, private dataManageService: DataManageService) {}

  ngOnInit(): void {
    this.tableRows = this.setDataList().map(i => ({ data: i, cols: [{ text: i.name }, { text: i.brans }] }));
  }

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
