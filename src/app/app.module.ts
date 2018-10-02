import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReservationPage } from '../pages/reservation/reservation';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { RegistrationPage } from '../pages/registration/registration';
import { RoomservicePage } from '../pages/roomservice/roomservice';
import { BookingformPage } from '../pages/bookingform/bookingform';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { LobbyPage } from '../pages/lobby/lobby';
import { WeddingPage } from '../pages/wedding/wedding';
import { SinglePage } from '../pages/single/single';
import { EventsPage } from '../pages/events/events';
import { DoublePage } from '../pages/double/double';
import { OrderPage } from '../pages/order/order';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReservationPage,
    AboutusPage,
    RegistrationPage,
    RoomservicePage,
    BookingformPage,
    ConfirmationPage,
    LobbyPage,
    WeddingPage,
    SinglePage,
    EventsPage,
    DoublePage,
    OrderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ReservationPage,
    AboutusPage,
    RegistrationPage,
    RoomservicePage,
    BookingformPage,
    ConfirmationPage,
    LobbyPage,
    WeddingPage,
    SinglePage,
    EventsPage,
    DoublePage,
    OrderPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
