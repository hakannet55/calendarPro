import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  loginControl(): boolean {
    const session = +localStorage.getItem('session');
    if (session === 1) {
      return true;
    } else {
      return false;
    }
  }

  logOut(): void {
    localStorage.setItem('session', null);
    window.location.reload();
  }

  setLogin(): void {
    localStorage.setItem('session', '1');
  }
}
