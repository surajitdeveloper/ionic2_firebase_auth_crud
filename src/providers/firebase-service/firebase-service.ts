import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from "angularfire2/auth";
/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(private firedb: AngularFireDatabase,
  private fieauth: AngularFireAuth) {
    console.log('Hello FirebaseServiceProvider Provider');
  }
  getData()
  {
    return this.firedb.database.ref();
  }
  firebaseauth()
  {
    return this.fieauth.auth;
  }
}
