import { LocalDatabaseDto, ProjectModel } from '../models/ecommon-models';
import * as moment from 'moment';

export function getData(key = 'data'): LocalDatabaseDto {
  const item = localStorage.getItem(key);
  let result: LocalDatabaseDto;
  if (item) {
    try {
      result = JSON.parse(item);
    } catch (e) {}
  }
  return {
    ...result,
    users: result.users.sort((a, b) => shortFuncById(a, b)),
    project: result.project.sort((a, b) => shortFuncById(a, b)),
  };
}

export function shortFuncById(a: any, b: any) {
  const aId = snq(() => a.id);
  const bId = snq(() => b.id);
  return aId === bId ? 0 : aId > bId ? -1 : 1;
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

export function getProjectList(): ProjectModel[] {
  const fullData = getData();
  const projeListData: ProjectModel[] = snq(() => fullData.project) || [];
  const allUserDataList = fullData.users;

  return projeListData.map(projeObj => ({
    ...projeObj,
    users: projeObj.users.map(prjUsr => {
      const aa = allUserDataList.find(i => i.id === prjUsr.id);
      if (aa) {
        prjUsr.name = aa.name;
        prjUsr.brans = aa.brans;
      }
      return prjUsr;
    }),
  }));
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

// year = null => year current year
export function currentDate(): { year: number; month: number; day: number } {
  const date = new Date();
  return { year: date.getFullYear(), month: date.getDate(), day: date.getDay() };
}

export function getMonthName(date: Date): string {
  return moment(moment(date).format('M')).format('MMMM');
}
export function getYear(date: Date): number {
  return +moment(date).format('Y');
}

export function getDateRange(start: Date, end: Date, format: string): string[] {
  const startMonth = +moment(start).format('M');
  const endMonth = +moment(end).format('M');
  const year = getYear(start);
  const result: string[] = [];
  if (endMonth > startMonth) {
    const diff = endMonth - startMonth + 1;
    let crMonthNumber = startMonth - 1;
    for (let i = 0; i < diff; i++) {
      result.push(moment(getDate(crMonthNumber, 1, year)).format(format));
      crMonthNumber++;
    }
  }
  return result;
}

export function getDate(month: number, day: number, year?: number): Date {
  return new Date(year || currentDate().year, month, day, 12, 0, 0, 0);
}

export function getMonthNameWithDate(date: string): string {
  // SampleDate "01-12-2022" => 12 => aralık
  const getMonth = +date.split('-')[1];
  return getMonthName(getDate(getMonth - 1, 1));
}
