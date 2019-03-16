import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, ViewController } from 'ionic-angular';
import { Book } from "../../models/Book";
import { MainService } from '../../services/main.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'page-lend-book',
    templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit  {

    index: number;
    book: Book;

    constructor(public navParams: NavParams,
                public alertCtrl: AlertController,
                public viewCtrl: ViewController,
                public mainService: MainService) {
    }

    ngOnInit() {
        this.index = this.navParams.get('index');
        this.book = this.mainService.booksList[this.index];
    }

    onToggle() {
        this.mainService.onLendMedium(this.index, 'book', '');
        this.dismissModal();
    }

    dismissModal() {
        this.viewCtrl.dismiss();
    }

    onSubmitForm(form: NgForm) {
        console.log(form.value);
        const borrower = form.value['borrower'];
        //this.book.borrower = form.value;
        this.mainService.onLendMedium(this.index, 'book', borrower);
        this.dismissModal();
    }
}
