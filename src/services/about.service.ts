import { Injectable } from "@angular/core";

@Injectable()
export class AboutService {
  comments = [
    { date: new Date(), message: "Message A" },
    { date: new Date(), message: "Message B" },
    { date: new Date(), message: "Message C" }
  ];

  addComment(c) {
    c.date = new Date();
    this.comments.push(c);
    console.table(this.comments);
  }

  getAllComments() {
    return this.comments;
  }
}
