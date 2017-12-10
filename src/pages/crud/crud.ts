import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the CrudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crud',
  templateUrl: 'crud.html',
})
export class CrudPage {
  private todo : FormGroup;
  private receipts = [];
  constructor(public navCtrl: NavController, 
    private formBuilder: FormBuilder,
    public navParams: NavParams) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  /*
    $scope.get_val = function(firebase_key)
    {
    	var key_ref = recipes.child(firebase_key);
    	key_ref.on('child_added', function(data) {
    		  var data_val = data.val();
    		  var data_key = data.key();
    		  $scope.key = firebase_key;
    		  if(data_key == "image")
    			  $scope.img_url = data_val;
    		  else if(data_key == "title")
    			  $scope.title = data_val;
    		  else if(data_key == "description")
    			  $scope.description = data_val;
    		});
    }
    $scope.del_element = function(firebase_key)
    {
    	recipes.child(firebase_key).remove();
    	$scope.get_receipt();
    	alert("Child Remove");
    }
  */
  logForm()
  {
    console.log(this.todo.value);
    /*
if(key == undefined || key == "")
    				{
    					recipes.push(full_data);
    	    			$scope.title = "";
    	    			$scope.description = "";
    	    			$scope.img_url = "";
    	    			$scope.key = "";
    	    			alert("Insert Successfully");
    	    			
    				}
    			else
    				{
    					recipes.child(key).set(full_data);
    					$scope.title = "";
    	    			$scope.description = "";
    	    			$scope.img_url = "";
    	    			$scope.key = "";
    	    			$scope.get_receipt();
    	    			alert("Updated Successfully");
    				}
    */
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CrudPage');
  }


}
