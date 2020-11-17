import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-bateau',
  templateUrl: './detail-bateau.page.html',
  styleUrls: ['./detail-bateau.page.scss'],
})
export class DetailBateauPage implements OnInit {

  detail: any;



  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(
      params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.detail = this.router.getCurrentNavigation().extras.state.bateau;
        }
    });
  }

  ngOnInit() {
  }

}
