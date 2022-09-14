import { Callback } from '@ngxs/store/src/internal/internals';

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
  taskList?: TaskDataModel[];
  id?: number;
}

export interface ProjectModel {
  id?: number;
  name: string;
  detail: string;
}

export interface LocalDatabaseDto {
  lang?: string;
  theme?: 'default' | 'dark' | 'blue';
  users?: UserModel[];
  project?: ProjectModel[];
}
