import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";
import { News } from "../news";
import { Input } from "@angular/core";
@Component({
  selector: "app-add-comment",
  templateUrl: "./add-comment.component.html",
  styleUrls: ["./add-comment.component.css"]
})
export class AddCommentComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(""),
    text: new FormControl("")
  });
  @Input() news: News;
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
  onComment() {
    this.firebaseService.addComment(
      this.form.value.name,
      this.form.value.text,
      this.news.id
    );
    alert("addComplete");
  }
}
