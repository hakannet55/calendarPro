import { Injectable } from '@angular/core';
import { ProjectModel, UserModel } from '../shared/models/ecommon-models';
import snq, { dataInsertId, getData, setData } from '../shared/utils/common-utils';

@Injectable({providedIn:'root'})
export class DataManageService {
  constructor() {
  }

  addPersonel(personal: UserModel): void {
    const previousData = getData();
    const list=(previousData?.users || []);
    const personalData = dataInsertId<UserModel>(personal,list);
    setData({ ...previousData, users: [...list, personalData] });
  }

  removePersonel(index: number): void {
    const previousData = getData();
    setData({ ...previousData, users: [...(previousData?.users || []).filter((itm, idx) => idx !== index)] });
  }

  removeProject(index: number): void {
    const previousData = getData();
    setData({ ...previousData, project: [...(previousData?.project || []).filter((itm, idx) => idx !== index)] });
  }

  addProject(project: ProjectModel): void {
    const previousData = getData();
    const list=(previousData?.project || []);
    const pId=snq(()=>project.id);
    if(!pId){
      const projectData = dataInsertId<ProjectModel>(project,list);
      setData({ ...previousData, project: [...list, projectData] });
    }else{
      setData({ ...previousData, project: [...list, project] });
    }
  }

}
