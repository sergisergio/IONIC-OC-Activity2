import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import {BookListPage} from "../book-list/book-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController) {}

  onGoToBooks() {
    this.navCtrl.push(BookListPage);
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
