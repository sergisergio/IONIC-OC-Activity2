import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { LendCdPage } from "../lend-cd/lend-cd";
import { Cd } from "../../models/Cd";
import { MainService } from "../../services/main.service";
import { Subscription } from 'rxjs/Subscription';


@Component({
    selector: 'page-cd-list',
    templateUrl: 'cd-list.html',
})
export class CdListPage implements OnInit, OnDestroy{

    cdsList: Cd[];
    cdsSubscription: Subscription;

    constructor(public modalCtrl: ModalController,
                private mainService: MainService,
                public menuCtrl: MenuController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CdListPage');
    }

    ngOnInit() {
        this.cdsSubscription = this.mainService.cds$.subscribe(
            (cds: Cd[]) => {
                this.cdsList = cds;
            }
        );
        this.mainService.retrieveData();
        this.mainService.emitCds();
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

    ngOnDestroy() {
        this.cdsSubscription.unsubscribe();
    }
}
