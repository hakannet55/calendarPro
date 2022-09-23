import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TableCol, TableRow, UserModel } from '../../../shared/models/ecommon-models';
import snq, {
  currentDate,
  getData,
  getDate,
  getDateRange,
  getMonthNameWithDate,
} from '../../../shared/utils/common-utils';
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
    // 2022 auto detech or manual
    const year = currentDate().year;
    this.tableRows = this.setDataList().map(i => ({ data: i, cols: [{ text: i.name }, { text: i.brans }] }));
    const firstDate = getDate(0, 1, year);
    const endDate = getDate(11, 1, year);
    // const month = getMonthName(firstDate);
    const monthData: { month: string; date: string }[] = getDateRange(firstDate, endDate, 'DD-MM-Y').map(i => ({
      date: i,
      month: getMonthNameWithDate(i),
    }));
    const blankAry: TableCol[] = [];
    monthData.forEach(line1 => {
      this.headers.push({ text: line1.month });
      blankAry.push({ text: '' });
    });

    this.tableRows = this.tableRows.map(i => {
      return { ...i, cols: [...i.cols, ...blankAry] };
    });
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
