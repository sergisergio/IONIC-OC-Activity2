import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, ViewController } from 'ionic-angular';
import { Book } from "../../models/Book";
import { MainService } from '../../services/main.service';


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
        if (!this.book.isLent) {
            let alert = this.alertCtrl.create({
                title: 'Êtes-vous certain(e) de vouloir continuer ?',
                subTitle: 'Ce CD sera prêté !',
                buttons: [
                    {
                        text: 'Annuler',
                        role: 'cancel'
                    },
                    {
                        text: 'Confirmer',
                        handler: () => this.book.isLent = true
                    }
                ]
            });
            alert.present();
        }
        else {
            let alert = this.alertCtrl.create({
                title: 'Êtes-vous certain(e) de vouloir continuer ?',
                subTitle: 'Ce livre sera rendu !',
                buttons: [
                    {
                        text: 'Annuler',
                        role: 'cancel'
                    },
                    {
                        text: 'Confirmer',
                        handler: () => this.book.isLent = false
                    }
                ]
            });
            alert.present();
        }
    }

  dismissModal() {
      this.viewCtrl.dismiss();
  }
}
