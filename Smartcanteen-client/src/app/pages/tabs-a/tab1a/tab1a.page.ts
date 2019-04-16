import { Component, OnInit } from '@angular/core';
import { PenjualMakananService } from 'src/app/penjual-makanan.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-tab1a',
  templateUrl: './tab1a.page.html',
  styleUrls: ['./tab1a.page.scss'],
})
export class Tab1aPage {
  penjualList: any;
  constructor(public penjualmakananService: PenjualMakananService) {
     this.loadPenjual();
  }

  loadPenjual() {
    this.penjualmakananService.loadPenjual().subscribe((response: Response) => {
      // this.penjualList = response.json();
      // console.log(this.penjualList);
      let data = response.json();
      for (let elem of data) {
        elem.images = elem.images.split(',');
      }
      this.penjualList = data; 
    });
  }
}



