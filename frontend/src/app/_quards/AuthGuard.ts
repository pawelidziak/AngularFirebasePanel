import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {AngularFireAuth} from "angularfire2/auth";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private afAuth: AngularFireAuth) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.afAuth.authState.map(auth => {
      if (auth) {
        // logged in so return true
        return true;
      }

      // not logged in so redirect to login page with the return url
      this._router.navigate(['/login']);
      return false;
    });
  }

}
