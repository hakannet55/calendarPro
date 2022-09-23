import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class LoginControlResolver implements Resolve<any> {
  constructor(private router: Router, private authService: AuthService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const { url } = state;

    const sessionExist = this.authService.loginControl();
    if (url.includes('login') || sessionExist) {
      return of(true);
    } else {
      return this.router.navigate(['login']);
    }
  }
}
