import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MyaccountPage } from "../myaccount/myaccount";
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private todo : FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private firebase: FirebaseServiceProvider) {

      this.todo = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      });
  }


  logForm(){
    console.log(this.todo.value);
    this.firebase.firebaseauth()
    .signInWithEmailAndPassword(this.todo.value.email,this.todo.value.password)
    .then((result) =>
    {
      console.log(result);
      this.navCtrl.push(MyaccountPage,result);
    })
    .catch(function(e)
      {
        console.log(e);
        alert("Error- "+e.message);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
