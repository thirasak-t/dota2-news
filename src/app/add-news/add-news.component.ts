import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-add-news",
  templateUrl: "./add-news.component.html",
  styleUrls: ["./add-news.component.css"]
})
export class AddTweetComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(""),
    link: new FormControl(""),
    img: new FormControl("")
  });
  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {}
  onNews() {
    this.firebaseService.addNews(
      this.form.value.name,
      this.form.value.link,
      this.form.value.img
    );
    this.router.navigate(["/"]);
  }
}
