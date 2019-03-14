import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { LendCdPage } from "../lend-cd/lend-cd";
import { Cd } from "../../models/Cd";
import { MainService } from "../../services/main.service";

@Component({
    selector: 'page-cd-list',
    templateUrl: 'cd-list.html',
})
export class CdListPage {

    cdsList: Cd[];

    constructor(public modalCtrl: ModalController,
                private mainService: MainService,
                public menuCtrl: MenuController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CdListPage');
    }

    onLoadCd(index: number) {
        let modal = this.modalCtrl.create(LendCdPage, {index: index});
        modal.present();
    }

    ionViewWillEnter() {
        this.cdsList = this.mainService.cdsList.slice();
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }
}
