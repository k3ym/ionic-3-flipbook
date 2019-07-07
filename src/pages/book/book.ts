import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

declare var $:any;

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {

  constructor(
    public navCtrl: NavController,
    public platform: Platform
  ) {}

  ionViewDidLoad() {
    $("#flipbook").turn({
      width: '100%',
      height: this.platform.height() - 50,
      display: this.platform.is('mobile') ? 'single' : 'double',
      // autoCenter: true
    });
  }
}
