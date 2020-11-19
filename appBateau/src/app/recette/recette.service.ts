import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})

export class RecetteService {

  constructor(private firebase: AngularFireDatabase, private firestore: AngularFireStorage) { }

  getRecettes() {
    return this.firebase.database.ref("/recettes").once("value");
  }

  getImagesDatabase() {
    return this.firebase.list("recettes").snapshotChanges(["child_added"]);
  }

  getImagesStorage(image: any) {
    const imgRef = image.payload.exportVal().image;
    return this.firestore.ref(imgRef).getDownloadURL();
  }
}