import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-reporn-problem",
  templateUrl: "./reporn-problem.component.html",
  styleUrls: ["./reporn-problem.component.css"]
})
export class RepornProblemComponent implements OnInit {
  form = new FormGroup({
    topic: new FormControl(""),
    problem: new FormControl("")
  });
  imgsrc = "";
  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}
  ngOnInit() {}
  onProblem() {
    if (this.form.value.key == "arm") {
      this.firebaseService.addReport(
        this.form.value.topic,
        this.form.value.problem
      );
      alert("AddComplete");
      this.router.navigate(["/"]);
    } else {
      alert("Wrong password");
    }
  }
}
