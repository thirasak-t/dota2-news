import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { News } from "../news";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"]
})
export class DisplayComponent implements OnInit {
  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}
  @Input() news: News;

  ngOnInit() {
    this.news = {
      ...this.news
    };
  }
}
