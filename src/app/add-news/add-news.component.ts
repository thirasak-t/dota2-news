import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-add-news",
  templateUrl: "./add-news.component.html",
  styleUrls: ["./add-news.component.css"]
})
export class AddNewsComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(""),
    text: new FormControl(""),
    img: new FormControl(""),
    dataSource: new FormControl(""),
    key: new FormControl("")
  });
  imgsrc = "";
  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {}
  fileChange(e) {
    const file = e.srcElement.files[0];
    this.imgsrc = window.URL.createObjectURL(file);
    this.form.value.img = this.imgsrc;
  }
  onNews() {
    if (this.form.value.key == "arm") {
      this.firebaseService.addNews(
        this.form.value.name,
        this.form.value.text,
        this.form.value.img,
        this.form.value.dataSource
      );
      alert("AddComplete");
      this.router.navigate(["/"]);
    } else {
      alert("Wrong password");
    }
  }
}
