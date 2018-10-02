import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoublePage } from './double';

@NgModule({
  declarations: [
    DoublePage,
  ],
  imports: [
    IonicPageModule.forChild(DoublePage),
  ],
})
export class DoublePageModule {}
