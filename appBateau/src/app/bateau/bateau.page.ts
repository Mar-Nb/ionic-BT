import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BateauService } from '../services/bateau/bateau.service';

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.page.html',
  styleUrls: ['./bateau.page.scss'],
})
export class BateauPage implements OnInit {


  listeBateau: any[];

  constructor(private bateauServ: BateauService, private router: Router) { }

  ngOnInit() {
    this.bateauServ.getBateaux().then(
      (response) => {
        this.listeBateau = response.val();

        this.bateauServ.getImagesDatabase().subscribe((images) => {
          images.forEach((image) => {
            this.bateauServ.getImagesStorage(image).subscribe(imageUrl => {
              let nomImage = image.payload.exportVal().nom;
              this.listeBateau.forEach(element => {
                if (element.nom == nomImage) { element["url"] = imageUrl; }
              });
            });
          });
        });

        console.log("bateaux", this.listeBateau);
      },
      (error) => { console.log("Erreur !", error) }
    );
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
