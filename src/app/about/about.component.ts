import { Component, OnInit } from "@angular/core";
import { AboutService } from "../../services/about.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  //title: string = "AppAbout works!";
  comments = [];
  commentaire = { date: new Date(), message: "" };

  constructor(private aboutService: AboutService) {
    this.comments = this.aboutService.getAllComments();
  }

  ngOnInit() {}

  onAddComment(c) {
    this.aboutService.addComment(c);
    this.aboutService.getAllComments();
    //this.commentaire.message = "";
  }
}
