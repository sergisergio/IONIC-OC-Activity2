import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BookListPage } from "../pages/book-list/book-list";
import { CdListPage } from "../pages/cd-list/cd-list";
import { LendBookPage } from "../pages/lend-book/lend-book";
import { LendCdPage } from "../pages/lend-cd/lend-cd";
import { SettingsPage } from "../pages/settings/settings";
import { TabsPage } from "../pages/tabs/tabs";
import { MainService } from "../services/main.service";
import { AuthService } from '../services/auth.service';
import { OptionsPage } from "../pages/options/options";
import { AuthPage } from "../pages/auth/auth";
import { IonicStorageModule } from '@ionic/storage';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
authDomain: "ionic-oc-activity2.firebaseapp.com",
databaseURL: "https://ionic-oc-activity2.firebaseio.com",
projectId: "ionic-oc-activity2",
storageBucket: "ionic-oc-activity2.appspot.com",
messagingSenderId: "234030472057"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListPage,
    CdListPage,
    LendBookPage,
    LendCdPage,
    SettingsPage,
    TabsPage,
    OptionsPage,
    AuthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListPage,
    CdListPage,
    LendBookPage,
    LendCdPage,
    SettingsPage,
    TabsPage,
    OptionsPage,
    AuthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MainService,
    AuthService
  ]
})
export class AppModule {}
