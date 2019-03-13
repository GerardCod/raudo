import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(localStorage.getItem('user')){
            return true;
        }

        this.router.navigate(['/landing','inicio-sesion','iniciar'], {queryParams: {returnUrl: state.url}});
        return false;
    }

}
