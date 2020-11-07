import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.page.html',
  styleUrls: ['./detail-restaurant.page.scss'],
})
export class DetailRestaurantPage implements OnInit {

  detail: any;
  nomFb: string;
  nomInsta: string;
  nomTwitter: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(
      params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.detail = this.router.getCurrentNavigation().extras.state.restaurant;
        }
    });
  }

  ngOnInit() {
    if (this.detail.res_sociaux.facebook) {
      this.nomFb = this.detail.res_sociaux.facebook.split("/").pop();
    }

    if (this.detail.res_sociaux.instagram) {
      this.nomInsta = this.detail.res_sociaux.instagram.split("/").pop(); 
    }

    if (this.detail.res_sociaux.twitter) {
      this.nomTwitter = this.detail.res_sociaux.twitter.split("/").pop(); 
    }
  }

}
