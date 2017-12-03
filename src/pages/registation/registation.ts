import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the RegistationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registation',
  templateUrl: 'registation.html',
})
export class RegistationPage {

  private todo : FormGroup;
  
    constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private formBuilder: FormBuilder) {
  
        this.todo = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required],
        });
    }
  
    logForm(){
      console.log(this.todo.value)
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistationPage');
  }

}
