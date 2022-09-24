import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartDataModel, ProjectModel } from '../../../shared/models/ecommon-models';
import snq, { charUtilsData, getData, getRandomInt } from '../../../shared/utils/common-utils';
import { Router } from '@angular/router';
import { DataManageService } from '../../../services/data-manage.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  circleChartData: number[];

  // events
  lineChartdata: ChartDataModel;

  constructor(private route: Router, private dataManageService: DataManageService) {}

  ngOnInit(): void {
    const data = getData();
    this.lineChartdata = charUtilsData(
      data.project.map(i => ({
        name: i.name,
        data: [getRandomInt() + 20, getRandomInt() + 5, getRandomInt() + 15, getRandomInt() + 9, getRandomInt() + 20],
      })),
    );
    this.circleChartData = [getRandomInt() + 20, getRandomInt() + 10, getRandomInt() + 12];
  }

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
