import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../firebase.service";
import { News } from "../news";
@Component({
  selector: "app-dota2",
  templateUrl: "./dota2.component.html",
  styleUrls: ["./dota2.component.css"]
})
export class Dota2Component implements OnInit {
  dnews: News[];
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.getNews().subscribe(val => {
      this.dnews = val;
    });
  }
}
