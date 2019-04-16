import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PenjualMakananService {

  constructor(public http: Http) { }

  loadPenjual() {
    return this.http.get('http://localhost:8081/api/penjual');
    }
}
