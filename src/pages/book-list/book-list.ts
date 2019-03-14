import { Component } from '@angular/core';
import {MenuController, ModalController, NavParams} from 'ionic-angular';
import {LendBookPage} from "../lend-book/lend-book";
import {Book} from "../../models/Book";
import {MainService} from "../../services/main.service";

@Component({
selector: 'page-book-list',
templateUrl: 'book-list.html',
})
export class BookListPage {

booksList: Book[];

constructor(public modalCtrl: ModalController,
            public navParams: NavParams,
            public menuCtrl: MenuController,
            private mainService: MainService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListPage');
  }

  ionViewWillEnter() {
      this.booksList = this.mainService.booksList.slice();
  }

  onLoadBook(index: number) {
      let modal = this.modalCtrl.create(LendBookPage, {index: index});
      modal.present();
  }

  onToggleMenu() {
      this.menuCtrl.open();
  }

}
