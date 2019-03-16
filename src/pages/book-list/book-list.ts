import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController, ModalController} from 'ionic-angular';
import { LendBookPage } from "../lend-book/lend-book";
import { Book } from "../../models/Book";
import { MainService } from "../../services/main.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
 selector: 'page-book-list',
 templateUrl: 'book-list.html',
})
export class BookListPage implements OnInit, OnDestroy {

 booksList: Book[];
 booksSubscription: Subscription;

 constructor(public modalCtrl: ModalController,
             public menuCtrl: MenuController,
             private mainService: MainService) {
  }

  //ionViewDidLoad() {
    //console.log('ionViewDidLoad BookListPage');
  //}

  //ionViewWillEnter() {
      //this.booksList = this.mainService.booksList.slice();
  //}

  ngOnInit() {
     this.booksSubscription = this.mainService.books$.subscribe(
         (books: Book[]) => {
             this.booksList = books.slice();
         });
     this.mainService.emitBooks();
    }

  onLoadBook(index: number) {
      let modal = this.modalCtrl.create(LendBookPage, {index: index});
      modal.present();
  }

  onToggleMenu() {
      this.menuCtrl.open();
  }

  ngOnDestroy() {
     this.booksSubscription.unsubscribe();
  }

}
