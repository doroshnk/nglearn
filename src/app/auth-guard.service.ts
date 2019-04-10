import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean | Observable<boolean> {
    // : boolean | Observable<boolean>

      return  this.auth.isAuth().then((isLoggedIn: boolean) => {
            if (isLoggedIn) {
                return true;
            } else {
                return false;
            }
        });
    }
}
