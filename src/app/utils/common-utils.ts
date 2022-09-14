import { LocalDatabaseDto } from '../models/ecommon-models';

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

export function dataInsertId<T>(data: any, list: any[]): T {
  Object.assign(data, { id: list.length + 1 });
  return data;
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
