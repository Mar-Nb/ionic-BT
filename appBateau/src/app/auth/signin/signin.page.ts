import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(
      public authService: AuthService,
      public router: Router
  ) {}

  ngOnInit() {}

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
        .then((res) => {
          if (this.authService.isEmailVerified) {
            this.router.navigate(['dashboard']);
          } else {
            window.alert('Email is not verified');
            return false;
          }
        }).catch((error) => {
      window.alert(error.message);
    });
  }

}
