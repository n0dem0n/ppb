import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {

  constructor(public http: Http, public toastController: ToastController) { }
  loadUser() {
    return this.http.get('http://localhost:8081/api/user/');
  }

  loginUser(data) {
    // console.log(data.email, data.password);
    return this.http.post('http://localhost:8081/api/user/', data);
  }
  // addUser(data) {
  //   return this.http.post('http://localhost:8081/api/user/', data);
  // }
  // updateUser(data) {
  //   return this.http.post('http://localhost:8081/api/user/' + data.userid, data);
  // }
  // deleteUser(userId) {
  //   console.log(userId);
  //   return this.http.delete('http://localhost:8081/api/user/' + userId);
  // }
  // async message(msg) {
  //   const toast = await this.toastController.create({
  //     message: msg,
  //     duration: 2000
  //   });
  //   toast.present();
  // }
}
