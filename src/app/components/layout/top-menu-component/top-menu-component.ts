import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { eCommon } from '../../../shared/models/ecommon-models';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'top-menu-component',
  templateUrl: './top-menu-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenuComponent implements OnInit {
  items: eCommon.MenuItem[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeMenuItems();
  }

  private initializeMenuItems() {
    this.items = [{ label: 'Özet' }, { label: 'Ödevler' }, { label: 'Etüt' }, { label: 'Sınavlar' }];
  }

  logout() {
    this.authService.logOut();
  }
}
