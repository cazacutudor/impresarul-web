import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) {
  }

  private _loggedIn = false;

  login(email, password) {
    if (email === 'admin@impresarul.com' && password === 'admin') {
      this.router.navigate(['/dashboard']);
      this._loggedIn = true;
    } else {
      alert('Login incorrect');
    }
  }

  isLoggedIn() {
    return this._loggedIn;
  }
}
