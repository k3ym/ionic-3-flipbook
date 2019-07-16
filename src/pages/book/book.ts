import { Component, ElementRef, ViewChild } from "@angular/core";
import {
  IonicPage,, Loading
  NavController,
  NavParams
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-book",
  templateUrl: "book.html"
})
export class BookPage {
  book = {
    id: 0,
    title: "",
    author: "",
    publishDate: "",
    tableOfContents: [],
    coverImg: "",
    pages: [],
    backCoverImg: ""
  };
  bookPage: any;
  bookId = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {

  }

  onCoverSelected($event) {
    if($event.target.files && $event.target.files[0]){
      let reader = new FileReader();

      reader.onload = ($event:any) => {
        this.book.coverImg = $event.target.result;
      }
      reader.readAsDataURL($event.target.files[0]);
    }
  }

  onPageSelected($event) {
    if($event.target.files && $event.target.files[0]){
      let reader = new FileReader();

      reader.onload = ($event:any) => {
        this.bookPage = $event.target.result;
      }
      reader.readAsDataURL($event.target.files[0]);
    }
  }

  addPage(): void {
    this.book.pages.push(this.bookPage);
  }

  deletePage(i): void {
    this.book.pages.splice(i, 1);
  }

  onBackCoverSelected($event) {
    if($event.target.files && $event.target.files[0]){
      let reader = new FileReader();

      reader.onload = ($event:any) => {
        this.book.backCoverImg = $event.target.result;
      }
      reader.readAsDataURL($event.target.files[0]);

    }
  }

  createBook(): void {
    this.bookId++;
    this.book.publishDate = new Date().toLocaleString();
    this.book.id = this.bookId;
    console.log(this.book);
  }

}
