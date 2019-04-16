import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-makanan',
  templateUrl: './makanan.page.html',
  styleUrls: ['./makanan.page.scss'],
})
export class MakananPage {
  menuList: any;
  // userId = null;

  constructor(public menuService: MenuService, private activatedRoute: ActivatedRoute) {
    this.loadMenu();
  }

  loadMenu() {
    this.menuService.loadMenu(this.activatedRoute.snapshot.paramMap.get('userid')).subscribe((response: Response) => {
      this.menuList = response.json();
      console.log(this.menuList);
    });
  }

  // ngOnInit() {
  //   this.userId = this.activatedRoute.snapshot.paramMap.get('userid');
  // }
}
