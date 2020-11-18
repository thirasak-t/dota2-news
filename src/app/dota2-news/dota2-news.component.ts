import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { News } from "../news";
import { FirebaseService } from "../firebase.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-dota2-news",
  templateUrl: "./dota2-news.component.html",
  styleUrls: ["./dota2-news.component.css"]
})
export class Dota2NewsComponent implements OnInit {
  news: News[];
  constructor(
    private firebaseService: FirebaseService,
    private activateRiute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRiute.params.subscribe(routeParam => {
      this.firebaseService.getNewsByID(routeParam.id).subscribe(n => {
        this.news = n;
      });
    });
  }
}
