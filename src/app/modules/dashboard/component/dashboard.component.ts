import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ProjectModel } from '../../../shared/models/ecommon-models';
import snq, { getData } from '../../../shared/utils/common-utils';
import { Router } from '@angular/router';
import { DataManageService } from '../../../services/data-manage.service';
import { BaseChartDirective } from 'ng2-charts';
import { SingleOrMultiDataSet } from 'ng2-charts/lib/base-chart.directive';
import * as chartJs from 'chart.js';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  lineChartData: SingleOrMultiDataSet;

  constructor(private route: Router, private dataManageService: DataManageService) {}

  ngOnInit(): void {
    this.lineChartData = [20, 55, 45, 15, 59, 80, 181, 16, 55, 10];
  }

  // events
  linedataset: chartJs.ChartDataSets[] = [
    { label: 'data-1', data: [44, 20, 55, 45, 15, 59, 80, 181, 16, 55, 10, 155] },
    { label: 'data-2', data: [144, 50, 55, 45, 15, 59, 80, 181, 96, 55, 10, 115] },
  ];

  public chartClicked({ event, active }: { event?: any; active?: {}[] }): void {
    console.log(event, active);
  }

  setDataList(): ProjectModel[] {
    return snq(() => getData().project) || [];
  }

  navigate(path: string): void {
    this.route.navigate([path]);
  }
}
