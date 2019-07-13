import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Platform } from "ionic-angular";

// for jquery
declare var $: any;

@Component({
  selector: "page-book-reader",
  templateUrl: "book-reader.html"
})
export class BookReaderPage {
  book: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform
  ) {
    this.book = this.navParams.get("book");
  }

  ionViewDidLoad() {
    $("#flipbook").turn({
      width: "100%",
      height: this.platform.height() - 50,
      display: this.platform.is("mobile") ? "single" : "double",
      autoCenter: true
    });
  }

}
