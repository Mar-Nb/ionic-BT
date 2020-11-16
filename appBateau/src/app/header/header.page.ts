import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {


  isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
        (user) => {
          this.isAuth = !!user;
        }
    );
  }

}
