import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingformPage } from './bookingform';

@NgModule({
  declarations: [
    BookingformPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingformPage),
  ],
})
export class BookingformPageModule {}
