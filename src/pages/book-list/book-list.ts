import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Slides,
  Platform
} from "ionic-angular";

import { BookReaderPage } from "../book-reader/book-reader";
import { BookPage } from "../book/book";

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-book-list",
  templateUrl: "book-list.html"
})
export class BookListPage {
  isDesktop = true;

  books = [
    {
      id: 1,
      title: "Sample Book 1",
      author: "Mr. Sample",
      publishDate: "2019-07-13",
      tableOfContents: [],
      coverImg: "assets/books/sample_1/0001.jpg",
      pages: [
        "assets/books/sample_1/0001.jpg",
        "assets/books/sample_1/0002.jpg",
        "assets/books/sample_1/0003.jpg",
        "assets/books/sample_1/0004.jpg",
        "assets/books/sample_1/0005.jpg",
        "assets/books/sample_1/0006.jpg",
        "assets/books/sample_1/0007.jpg",
        "assets/books/sample_1/0008.jpg",
        "assets/books/sample_1/0009.jpg"
      ],
      backCoverImg: ""
    },
    {
      id: 2,
      title: "Sample Book 2",
      author: "Mr. Sample",
      publishDate: "2019-07-13",
      tableOfContents: [],
      coverImg: "assets/books/sample_1/0001.jpg",
      pages: [
        "assets/books/sample_1/0001.jpg",
        "assets/books/sample_1/0002.jpg",
        "assets/books/sample_1/0003.jpg",
        "assets/books/sample_1/0004.jpg",
        "assets/books/sample_1/0005.jpg",
        "assets/books/sample_1/0006.jpg",
        "assets/books/sample_1/0007.jpg",
        "assets/books/sample_1/0008.jpg",
        "assets/books/sample_1/0009.jpg"
      ],
      backCoverImg: ""
    },
    {
      id: 3,
      title: "Sample Book 3",
      author: "Mr. Sample",
      publishDate: "2019-07-13",
      tableOfContents: [],
      coverImg: "assets/books/sample_1/0001.jpg",
      pages: [
        "assets/books/sample_1/0001.jpg",
        "assets/books/sample_1/0002.jpg",
        "assets/books/sample_1/0003.jpg",
        "assets/books/sample_1/0004.jpg",
        "assets/books/sample_1/0005.jpg",
        "assets/books/sample_1/0006.jpg",
        "assets/books/sample_1/0007.jpg",
        "assets/books/sample_1/0008.jpg",
        "assets/books/sample_1/0009.jpg"
      ],
      backCoverImg: ""
    },
    {
      id: 4,
      title: "Sample Book 4",
      author: "Mr. Sample",
      publishDate: "2019-07-13",
      tableOfContents: [],
      coverImg: "assets/books/sample_1/0001.jpg",
      pages: [
        "assets/books/sample_1/0001.jpg",
        "assets/books/sample_1/0002.jpg",
        "assets/books/sample_1/0003.jpg",
        "assets/books/sample_1/0004.jpg",
        "assets/books/sample_1/0005.jpg",
        "assets/books/sample_1/0006.jpg",
        "assets/books/sample_1/0007.jpg",
        "assets/books/sample_1/0008.jpg",
        "assets/books/sample_1/0009.jpg"
      ],
      backCoverImg: ""
    },
    {
      id: 5,
      title: "Sample Book 5",
      author: "Mr. Sample",
      publishDate: "2019-07-13",
      tableOfContents: [],
      coverImg: "assets/books/sample_1/0001.jpg",
      pages: [
        "assets/books/sample_1/0001.jpg",
        "assets/books/sample_1/0002.jpg",
        "assets/books/sample_1/0003.jpg",
        "assets/books/sample_1/0004.jpg",
        "assets/books/sample_1/0005.jpg",
        "assets/books/sample_1/0006.jpg",
        "assets/books/sample_1/0007.jpg",
        "assets/books/sample_1/0008.jpg",
        "assets/books/sample_1/0009.jpg"
      ],
      backCoverImg: ""
    },
    {
      id: 6,
      title: "Sample Book 6",
      author: "Mr. Sample",
      publishDate: "2019-07-13",
      tableOfContents: [],
      coverImg: "assets/books/sample_1/0001.jpg",
      pages: [
        "assets/books/sample_1/0001.jpg",
        "assets/books/sample_1/0002.jpg",
        "assets/books/sample_1/0003.jpg",
        "assets/books/sample_1/0004.jpg",
        "assets/books/sample_1/0005.jpg",
        "assets/books/sample_1/0006.jpg",
        "assets/books/sample_1/0007.jpg",
        "assets/books/sample_1/0008.jpg",
        "assets/books/sample_1/0009.jpg"
      ],
      backCoverImg: ""
    },
  ];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private plt: Platform
  ) {
    if (this.plt.is("mobile")) {
      this.isDesktop = false;
    }
    console.log(this.plt)
  }

  ionViewDidLoad(): void {
    console.log("ionViewDidLoad BookListPage");
  }

  goToReader(book): void {
    this.navCtrl.push(BookReaderPage, { book });
  }

  goToBookPage(): void {
    this.navCtrl.push(BookPage);
  }
}
