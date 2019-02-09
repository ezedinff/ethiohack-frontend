import {Component} from '@angular/core';
import {AuthService} from '../../shared/asynServices/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'auth-component',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private authService: AuthService, private router: Router) {}
  tryGoogleLogin() {
    this.authService.googleLogin()
      .then(res => {
        this.router.navigate(['/app']);
      });
  }
}
