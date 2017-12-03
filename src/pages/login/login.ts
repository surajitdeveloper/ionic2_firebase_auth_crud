import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
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
    private formBuilder: FormBuilder) {

      this.todo = this.formBuilder.group({
        title: ['', Validators.required],
        description: [''],
      });
  }

  logForm(){
    console.log(this.todo.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
