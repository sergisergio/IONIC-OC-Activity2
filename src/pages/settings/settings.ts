import { Component } from '@angular/core';
import { ToastController, LoadingController, MenuController, ModalController, NavController, NavParams } from 'ionic-angular';
import { MainService } from "../../services/main.service";

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {

    constructor(private modalCtrl: ModalController,
                private mainService: MainService,
                private toastCtrl: ToastController,
                private loadingCtrl: LoadingController,
                public navCtrl: NavController,
                public navParams: NavParams,
                public menuCtrl: MenuController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad SettingsPage');
    }

    onToggleMenu() {
        this.menuCtrl.open();
    }

    onSave() {
        let loader = this.loadingCtrl.create({
            content: 'Sauvegarde en cours…'
        });
        loader.present();
        this.mainService.saveData().then(
            () => {
                loader.dismiss();
                this.toastCtrl.create({
                    message: 'Données sauvegardées !',
                    duration: 3000,
                    position: 'bottom'
                }).present();
            },
            (error) => {
                loader.dismiss();
                this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }
        );
    }

    onFetch() {
        let loader = this.loadingCtrl.create({
            content: 'Récuperation en cours…'
        });
        loader.present();
        this.mainService.retrieveData().then(
            () => {
                loader.dismiss();
                this.toastCtrl.create({
                    message: 'Données récupérées !',
                    duration: 3000,
                    position: 'bottom'
                }).present();
            },
            (error) => {
                loader.dismiss();
                this.toastCtrl.create({
                    message: error,
                    duration: 3000,
                    position: 'bottom'
                }).present();
            }
        );
    }
}
