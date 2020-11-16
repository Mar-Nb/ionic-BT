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
            this.router.navigate(['product-list']);
          } else {
            window.alert('Email is not verified');
            return false;
          }
        }).catch((error) => {
      window.alert(error.message);
    });
  }
  signUp(email, password){
      this.authService.RegisterUser(email.value, password.value)
          .then((res) => {
            // Do something here
            this.authService.SendVerificationMail();
            this.router.navigate(['verify-email']);
        }).catch((error) => {
        window.alert(error.message);
    });
  }

}
