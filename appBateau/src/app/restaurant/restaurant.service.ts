import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  tmpImages: any[] = new Array();

  constructor(private firebase: AngularFireDatabase, private firestore: AngularFireStorage) { }

  getRestaurants() {
    return this.firebase.database.ref("/restaurants").once("value");
  }

  getImagesDatabase() {
    return this.firebase.list("restaurants").snapshotChanges(["child_added"]);
  }

  getImagesStorage(image: any) {
    const imgRef = image.payload.exportVal().image;
    return this.firestore.ref(imgRef).getDownloadURL();
  }
}
