import { Component, OnInit } from '@angular/core';
import { UserUpdateService } from 'src/app/user-update.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login-penjual',
  templateUrl: './login-penjual.page.html',
  styleUrls: ['./login-penjual.page.scss'],
})
export class LoginPenjualPage {

  data : {
    email: '',
    password: ''
  }
  constructor(public userUpdateService: UserUpdateService ) { }

  
loginUser(){
  console.log(this.data);
  this.userUpdateService.loginUser(this.data).subscribe((response: Response) => { });
}

//   ngOnInit() {
//   }
 
}
