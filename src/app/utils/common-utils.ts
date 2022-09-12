import { LocalDatabaseDto, ProjectModel, UserModel } from '../models/ecommon-models';

export function getData(key = 'data'): LocalDatabaseDto {
  const item = localStorage.getItem(key);
  let result: LocalDatabaseDto;
  if (item) {
    try {
      result = JSON.parse(item);
    } catch (e) {}
  }
  return result;
}

export function setData(obj: LocalDatabaseDto, key = 'data'): void {
  let objDat = obj;
  if (!obj) {
    objDat = { users: [], project: [] };
  }
  localStorage.setItem(key, JSON.stringify(objDat));
}

export function addPersonel(personal: UserModel): void {
  const previousData = getData();
  setData({ ...previousData, users: [...(previousData?.users || []), personal] });
}

export function removePersonel(index: number): void {
  const previousData = getData();
  setData({ ...previousData, users: [...(previousData?.users || []).filter((itm, idx) => idx !== index)] });
}

export function addProject(project: ProjectModel): void {
  const previousData = getData();
  setData({ ...previousData, project: [...(previousData?.project || []), project] });
}

export function snq(callback, defaultValue = null) {
  try {
    var result = callback();
    return typeof result === 'undefined' ? defaultValue : result;
  } catch (err) {
    if (err instanceof TypeError) {
      return defaultValue;
    }
    throw err;
  }
}

export default snq;
