import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public http: HttpClient,
    private firebase: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }
  getData()
  {
    return this.firebase.database.ref();
  }
}
