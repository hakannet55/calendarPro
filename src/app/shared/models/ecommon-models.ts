import { Callback } from '@ngxs/store/src/internal/internals';
import * as chartJs from 'chart.js';

export namespace eCommon {
  export interface MenuItem {
    label: string;
    icon?: string;
    subItems?: MenuItem[];
    action?: Callback;
  }
}

export interface TaskDataModel {
  date: string;
  startDate: string;
  endDate: string;
  name: string;
  id?: number;
  project: ProjectModel;
}

export interface UserModel {
  name: string;
  brans: string;
  taskList?: TaskDataModel[];
  projeler?: string; //for UI
  id?: number;
}

export interface ProjectModel {
  id?: number;
  name: string;
  detail: string;
  users: UserModel[];
}

export interface LocalDatabaseDto {
  lang?: string;
  theme?: 'default' | 'dark' | 'blue';
  users?: UserModel[];
  project?: ProjectModel[];
}

export interface SelectionOptionModel {
  value: any;
  text?: string;
}

export interface TableCol {
  text: string;
  index?: number;
}

export interface TableRow {
  extraClass?: string;
  data: any;
  id?: number;
  index?: number;
  cols: TableCol[];
}

export interface ChartDataModel {
  labels: string[];
  data: chartJs.ChartDataSets[];
}
