import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RecetteService } from '../services/recette/recette.service';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})
export class RecettePage implements OnInit {

  listeRecette: any[];

  constructor(private recetteServ: RecetteService, private router: Router) { }

  ngOnInit() {
    this.recetteServ.getRecettes().then(
      (response) => {
        this.listeRecette = response.val();

        this.recetteServ.getImagesDatabase().subscribe((images) => {
          images.forEach((image) => {
            this.recetteServ.getImagesStorage(image).subscribe(imageUrl => {
              let nomImage = image.payload.exportVal().nom;
              this.listeRecette.forEach(element => {
                if (element.nom == nomImage) { element["url"] = imageUrl; }
              });
            });
          });
        });

        console.log("recettes", this.listeRecette);
      },
      (error) => { console.log("Erreur !", error) }
    );
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
