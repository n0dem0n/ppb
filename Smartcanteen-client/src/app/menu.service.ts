import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(public http: Http) { }
  
  loadMenu(id_user) {
    return this.http.get('http://localhost:8081/api/menu/'+ id_user);
  }

}
