import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BateauService } from './bateau.service';

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.page.html',
  styleUrls: ['./bateau.page.scss'],
})
export class BateauPage implements OnInit {


  listeBateau: any[];

  constructor(private bateauServ: BateauService, private router: Router) { }

  ngOnInit() {
    this.bateauServ.getBateau().subscribe(
      (response) => { this.listeBateau = response; },
      (error) => { console.log("Erreur !", error) });
  }

  ouvrirPageDetail(boat) {
    let navExtra: NavigationExtras = {
      state: {
        bateau: boat
      }
    };

    this.router.navigate(['bateau', 'detail-bateau'], navExtra);
    
  }



}
