import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-form-restaurant',
  templateUrl: './form-restaurant.page.html',
  styleUrls: ['./form-restaurant.page.scss'],
})
export class FormRestaurantPage implements OnInit {

  @Input() controller: ModalController;
  formulaire: FormGroup;
  emailComp: EmailComposer = new EmailComposer();

  constructor(private alertController: AlertController, private formBuilder: FormBuilder) {
    this.formulaire = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      mail: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      nomRestaurant: ['', Validators.required],
      adresse: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]{1,3}\ ([a-zA-Zéàèç']+\ ?)+$")
      ])],
      code: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(3),
        Validators.pattern("[0-9]{3,5}")
      ])],
      site: ['', Validators.pattern("(www\.)?[a-z]+(\.[a-z]{2,3})+$")],
      tel: ['', Validators.pattern("[0-9]{10}")],
      description: [''],
    });
  }

  ngOnInit() {
  }

  fermerFormulaire() {
    this.controller.dismiss({
      "dismissed": true
    });
  }

  soumettreFormulaire() {
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Envoi de la demande',
      message: "Le contenu de ce formulaire sous forme de mail à : <strong>lebateaudethibault@gmail.com</strong>.",
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Envoi annulé');
          }
        }, {
          text: 'Envoyer',
          handler: () => {
            let emailComp: EmailComposer = new EmailComposer();
            let email = {
              to: 'm.niombela@cfa-insta.fr',
              subject: 'Demande de partenariat',
              body: this.formulaire.value,
              isHtml: true
            }
            emailComp.open(email).then(
              (obj) => { console.log(obj); },
              (error) => { console.log(error); }
            );
            this.fermerFormulaire();
            console.log('Confirm Okay', this.formulaire.value);
          }
        }
      ]
    });

    await alert.present();
  }

  logAccountMail(composer: EmailComposer) {
    composer.hasAccount().then((apps: []) => {
      // Returns an array of configured email clients for the device
      console.log("Log client mail : ", apps);
    });
  }

}
