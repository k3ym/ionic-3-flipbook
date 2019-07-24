import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Platform } from "ionic-angular";
import { ScrollHideConfig } from '../../directives/scroll-hide.directive';

// for jquery
declare var $: any;

@Component({
  selector: "page-book-reader",
  templateUrl: "book-reader.html"
})
export class BookReaderPage {
  book: any;
  zoomRatio = 100;
  pageNum = 1;
  pageMax: number;

  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform
  ) {
    this.book = this.navParams.get("book");
    this.pageMax = this.book.pages.length;
  }

  ionViewDidLoad() {
    $("#flipbook").turn({
      width: "100%",
      height: this.platform.height() - 50,
      display: this.platform.is("mobile") ? "single" : "double",
      duration: 0,
      autoCenter: true,
      gradients: false,
      elevation: 0,
      turnCorners: "bl,tr"
    });
  }

  nextPage() {
    $("#flipbook").turn("next");
    this.pageNum = $("#flipbook").turn("page");
  }

  previousPage() {
    $("#flipbook").turn("previous");
    this.pageNum = $("#flipbook").turn("page");
  }

  zoom(percentage) {
    $("#flipbook").turn("zoom", percentage/100);
  }

  goTo(pageNum) {
    $("#flipbook").turn("page", pageNum);
  }
}
