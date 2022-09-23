import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sc-login-template-component',
  templateUrl: './login-component.html',
  styleUrls: ['login.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  login: { pass: string; user: string } = { pass: '123', user: 'demo1' };

  constructor(private router: Router) {}

  submit() {
    localStorage.setItem('session', '1');
    this.router.navigate(['summary']).then(_ => {
      window.location.reload();
    });
  }
}
