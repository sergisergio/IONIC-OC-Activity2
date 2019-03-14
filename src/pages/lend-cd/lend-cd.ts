import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, ViewController } from 'ionic-angular';
import { Cd } from "../../models/Cd";
import { MainService } from "../../services/main.service";

@Component({
selector: 'page-lend-cd',
templateUrl: 'lend-cd.html',
})
export class LendCdPage {

index: number;
cd: Cd;

constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public mainService: MainService,
              public alertCtrl: AlertController
              ) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.mainService.cdsList[this.index];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LendCdPage');
  }

    onToggle() {
        if (!this.cd.isLent) {
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
                        handler: () => this.cd.isLent = true
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
                        handler: () => this.cd.isLent = false
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
