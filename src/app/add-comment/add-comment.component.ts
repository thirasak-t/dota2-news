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
  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {}
  onComment() {
    this.firebaseService.addComment(
      this.form.value.name,
      this.form.value.text,
      this.news.id
    );
    this.router.navigate(["/dota2/" + this.news.id]);
    alert("addComplete");
  }
}
