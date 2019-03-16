import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, ViewController } from 'ionic-angular';
import { Cd } from "../../models/Cd";
import { MainService } from "../../services/main.service";
import { NgForm } from "@angular/forms";

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
                public alertCtrl: AlertController) {}

    ngOnInit() {
        this.index = this.navParams.get('index');
        this.cd = this.mainService.cdsList[this.index];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LendCdPage');
    }

    onToggle() {
        this.mainService.onLendMedium(this.index, 'cd', '');
        this.dismissModal();
    }

    dismissModal() {
        this.viewCtrl.dismiss();
    }

    onSubmitForm(form: NgForm) {
        console.log(form.value);
        const borrower = form.value['borrower'];
        this.mainService.onLendMedium(this.index, 'cd', borrower);
        this.dismissModal();
    }

}
