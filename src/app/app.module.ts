import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStepperModule } from 'ionic-stepper';

import { MyApp } from './app.component';
import { BookPage } from '../pages/book/book';
import { BookListPage } from '../pages/book-list/book-list';
import { BookReaderPage } from '../pages/book-reader/book-reader';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    BookPage,
    BookListPage,
    BookReaderPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicStepperModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookPage,
    BookListPage,
    BookReaderPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
