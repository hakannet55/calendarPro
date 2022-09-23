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
  headers: TableCol[] = [];
  tableRows: TableRow[] = [];
  selectedTab: 'personel' | 'proje' = 'proje';
  // 2022 auto detech or manual
  year: number;

  constructor(private route: Router, private dataManageService: DataManageService) {}

  ngOnInit(): void {
    // 2022 auto detech or manual
    this.year = currentDate().year;

    // default initialize tab and table
    this.selectedTabClick(this.selectedTab);
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

  initTableProje(): void {
    this.headers = [{ text: '#' }, { text: 'Personel' }, { text: 'İlerleme' }];
    this.tableRows = this.setDataList().map(i => ({
      data: i,
      cols: [{ text: i.name }, { text: i.brans }, { text: '%50' }],
    }));
    const firstDate = getDate(0, 1, this.year);
    const endDate = getDate(11, 1, this.year);
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

  initTablePersonel(): void {
    this.headers = [{ text: '#' }, { text: 'Personel' }, { text: 'Projeler' }];
    this.tableRows = [];
  }

  selectedTabClick(tabName: string) {
    this.selectedTab = tabName as any;
    if (this.selectedTab === 'personel') {
      this.initTablePersonel();
    } else {
      this.initTableProje();
    }
  }
}
