import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CrudPage } from "../pages/crud/crud";
import { LoginPage } from "../pages/login/login";
import { RegistationPage } from "../pages/registation/registation";
import { MyaccountPage } from "../pages/myaccount/myaccount";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
export const firebaseConfig = {
  apiKey: "AIzaSyBHOmWqfKAvzGM4a5kfV2fhaRXh3Zl5sCw",
  authDomain: "testsecureproject.firebaseapp.com",
  databaseURL: "https://testsecureproject.firebaseio.com",
  projectId: "testsecureproject",
  storageBucket: "testsecureproject.appspot.com",
  messagingSenderId: "848981853689"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CrudPage,
    LoginPage,
    RegistationPage,
    MyaccountPage
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CrudPage,
    LoginPage,
    RegistationPage,
    MyaccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
