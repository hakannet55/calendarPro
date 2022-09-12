import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { UserModel } from '../../../models/ecommon-models';
import snq, { addPersonel, getData, removePersonel } from '../../../utils/common-utils';

@Component({
  selector: 'calendar-main-component',
  templateUrl: './calendar-main.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarMainComponent {
  constructor() {}

  setDataList(): UserModel[] {
    return snq(() => getData().users) || [];
  }

  clickPersonalCreate() {
    const name = window.prompt('isim', '');
    if (name) {
      addPersonel({ name, id: 1 });
    }
  }

  removePersonelFromList(i: number): void {
    removePersonel(i);
  }
}
