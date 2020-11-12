import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-form-restaurant',
  templateUrl: './form-restaurant.component.html',
  styleUrls: ['./form-restaurant.component.scss'],
})
export class FormRestaurantComponent implements OnInit {

  @Input() controller: ModalController;

  constructor() { }

  ngOnInit() {}

  fermerFormulaire() {
    this.controller.dismiss({
      "dismissed": true
    });
  }

}
