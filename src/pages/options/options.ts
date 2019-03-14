import { Component } from '@angular/core';
import { MenuController, NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-options',
    templateUrl: 'options.html',
})
export class OptionsPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public menuCtrl: MenuController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad OptionsPage');
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }
}
