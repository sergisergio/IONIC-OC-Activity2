import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { TabsPage } from "../pages/tabs/tabs";
import { SettingsPage } from "../pages/settings/settings";
import { AuthPage } from '../pages/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  settingsPage:any = SettingsPage;
  authPage:any = AuthPage;

  isAuth;

  @ViewChild('content') content: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // Initialize Firebase
      var config = {
      apiKey: "AIzaSyCSGiVnq3-i2IY89Oay2AC5fn3H1wqHGWs",
      authDomain: "ionic-oc-activity2.firebaseapp.com",
      databaseURL: "https://ionic-oc-activity2.firebaseio.com",
      projectId: "ionic-oc-activity2",
      storageBucket: "ionic-oc-activity2.appspot.com",
      messagingSenderId: "234030472057"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          } else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        }
      );
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }

  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

