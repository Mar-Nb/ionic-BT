import { Component, ViewChild } from '@angular/core';

import { IonToggle, MenuController, Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild("themeToggle", { static: false }) themeToggle: IonToggle;
  isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private toastController: ToastController
  ) {
    this.initializeApp();

    if (this.isDarkMode) {
      document.body.classList.add("dark");
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  fermerMenu() {
    this.menu.close("menu");
  }

  async presentToast(apparition) {
    if (apparition) {
      const toast = await this.toastController.create({
      message: 'The darkness shall come now !',
      duration: 2000
    });

    toast.present();
    }
  }

  toggleModeSombre() {
    this.presentToast(this.themeToggle.checked);
    document.body.classList.toggle("dark");
  }
}
