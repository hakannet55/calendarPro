import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  login = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.login = this.auth.loginControl();
    if (moment) {
      moment.locale('tr', {
        weekdays: 'Pazar_Pazartesi_Salı_Carsamba_Persembe_Cuma_Cumartesi'.split('_'),
        months: [
          'Ocak',
          'Şubat',
          'Mart',
          'Nisan',
          'Mayıs',
          'Haziran',
          'Temmuz',
          'Ağustos',
          'Eylül',
          'Ekim',
          'Kasım',
          'Aralık',
        ],
      });
    }
  }
}
