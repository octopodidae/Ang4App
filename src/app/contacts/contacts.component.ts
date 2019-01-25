import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"]
})
export class ContactsComponent implements OnInit {
  info = {
    name: "Bob",
    email: "bob@gmail.com",
    job: "Dev"
  };

  constructor() {}

  ngOnInit() {}
}
