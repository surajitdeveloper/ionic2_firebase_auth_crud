import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistationPage } from './registation';

@NgModule({
  declarations: [
    RegistationPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistationPage),
  ],
})
export class RegistationPageModule {}
