import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class BateauService {

  constructor(private firebase: AngularFireDatabase, private firestore: AngularFireStorage) { }

  getBateaux() {
    return this.firebase.database.ref("/bateaux").once("value");
  }

  getImagesDatabase() {
    return this.firebase.list("bateaux").snapshotChanges(["child_added"]);
  }

  getImagesStorage(image: any) {
    const imgRef = image.payload.exportVal().image;
    return this.firestore.ref(imgRef).getDownloadURL();
  }
}
