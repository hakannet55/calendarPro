import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { eCommon } from '../../../models/ecommon-models';

@Component({
  selector: 'top-menu-component',
  templateUrl: './top-menu-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenuComponent implements OnInit {
  items: eCommon.MenuItem[] = [];

  ngOnInit(): void {
    this.initializeMenuItems();
  }

  private initializeMenuItems() {
    this.items = [{ label: 'Özet' }, { label: 'Ödevler' }, { label: 'Etüt' }, { label: 'Sınavlar' }];
  }
}
