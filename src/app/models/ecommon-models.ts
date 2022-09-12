import { Callback } from '@ngxs/store/src/internal/internals';

export namespace eCommon {
  export interface MenuItem {
    label: string;
    icon?: string;
    subItems?: MenuItem[];
    action?: Callback;
  }
}
export interface UserModel {
  name: string;
  id?: number;
}

export interface ProjectModel {
  name: string;
  detail: string;
}

export interface LocalDatabaseDto {
  lang?: string;
  theme?: 'default' | 'dark' | 'blue';
  users?: UserModel[];
  project?: ProjectModel[];
}
