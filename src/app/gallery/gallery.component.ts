import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
//import { HttpModule } from "@angular/http";
//import { HttpClientModule } from "@angular/common/http";
import "rxjs/add/operator/map";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  constructor(private http: Http) {}

  ngOnInit() {}

  pagePhotos: [];
  currentPage: number = 1;
  size: number = 12;
  pages: Array<number>;
  totalPages: number;
  motCle: string = "";
  webFormatImage: string;

  onSearch(dataForm) {
    //console.log(dataForm);
    this.totalPages = 0;
    //this.currentPage = 1;
    console.log(this.currentPage);
    this.http
      .get(
        "https://pixabay.com/api/?key=11383012-87b876a262f654f65a395ac4d&q=" +
          dataForm.motCle +
          "&per_page=" +
          this.size +
          "&image_type=photo&page=" +
          this.currentPage
      )
      .map(resp => resp.json())
      .subscribe(data => {
        this.pagePhotos = data.hits;
        this.totalPages = data.totalHits / this.size;
        this.totalPages = Math.round(this.totalPages);
        this.pages = new Array(this.totalPages);
      });
  }
  goToPge(i) {
    //this.currentPage = 0;
    //console.log(this.currentPage);
    this.currentPage = i + 1;
    this.onSearch({ motCle: this.motCle });
    //this.currentPage = 1;
    //console.log(this.currentPage);
  }

  extendImage(event) {
    this.webFormatImage = event.target.alt;
    window.open(this.webFormatImage);
  }
}
