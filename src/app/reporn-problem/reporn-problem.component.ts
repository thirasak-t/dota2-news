import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-reporn-problem',
  templateUrl: './reporn-problem.component.html',
  styleUrls: ['./reporn-problem.component.css']
})
export class RepornProblemComponent implements OnInit {
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
  ngOnInit() {
  }

}