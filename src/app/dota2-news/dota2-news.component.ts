import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { News } from "../news";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-dota2-news',
  templateUrl: './dota2-news.component.html',
  styleUrls: ['./dota2-news.component.css']
})
export class Dota2NewsComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}
  @Input() news: News;

  ngOnInit() {
  }

}