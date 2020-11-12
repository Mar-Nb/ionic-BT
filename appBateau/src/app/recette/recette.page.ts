import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RecetteService } from './recette.service';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})
export class RecettePage implements OnInit {

  listeRecette: any[];

  constructor(private recetteServ: RecetteService, private router: Router) { }

  ngOnInit() {
    this.recetteServ.getRecettes().subscribe(
      (response) => { this.listeRecette = response; },
      (error) => { console.log("Erreur !", error) });
  }

  ouvrirPageDetail(recette) {
    let navExtra: NavigationExtras = {
      state: {
        recette: recette
      }
    };

    this.router.navigate(['recette', 'detail-recette'], navExtra);
    
  }

}
