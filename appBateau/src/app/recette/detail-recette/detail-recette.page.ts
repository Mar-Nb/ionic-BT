import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.page.html',
  styleUrls: ['./detail-recette.page.scss'],
})
export class DetailRecettePage implements OnInit {
  detail: any;
  receipe:string[];
  etape:string[];


  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(
      params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.detail = this.router.getCurrentNavigation().extras.state.recette;
        }
    });
  }

  ngOnInit() {
    if (this.detail.ingredient) {
      this.receipe = this.detail.ingredient.split(",");
    }
    if(this.detail.recette){
      this.etape = this.detail.recette.split(",");
    }

  }

}
