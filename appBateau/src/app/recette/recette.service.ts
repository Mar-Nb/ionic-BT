import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecetteService {

  constructor(private http:HttpClient) { }

  getRecettes() {
    return this.http.get<any[]>("assets/recettes.json");
  }
}
