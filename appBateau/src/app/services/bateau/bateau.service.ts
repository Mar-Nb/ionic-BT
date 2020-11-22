import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BateauService {

  constructor(private http:HttpClient) { }

  getBateau() {
    return this.http.get<any[]>("assets/bateaux.json");
  }
}
