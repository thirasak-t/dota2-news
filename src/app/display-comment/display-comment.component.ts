import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Comment } from "../comment";
import { FirebaseService } from "../firebase.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-display-comment',
  templateUrl: './display-comment.component.html',
  styleUrls: ['./display-comment.component.css']
})
export class DisplayCommentComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}
  @Input() comment: Comment;
  ngOnInit() {
    this.comment = {
      ...this.comment,
      date: this.timeAgo(this.comment.date.toDate())
    };
  }
  timeAgo(val: Date) {
    const now = new Date();
    const diff = Math.abs(now.getTime() - val.getTime());
    const diffYear = Math.ceil(diff / (1000 * 3600 * 24 * 365));
    const diffMonth = Math.ceil(diff / (1000 * 3600 * 24 * 30));
    const diffWeek = Math.ceil(diff / (1000 * 3600 * 24 * 7));
    const diffDay = Math.ceil(diff / (1000 * 3600 * 24));
    const difHour = Math.ceil(diff / (1000 * 3600));
    const difMinute = Math.ceil(diff / (1000 * 60));
    const difSecond = Math.ceil(diff / 1000);
    if (difSecond < 60) {
      return "Just now.";
    }
    if (difMinute < 60) {
      return `${difMinute} minute(s) ago.`;
    }
    if (difHour < 60) {
      return `${difHour} hour(s) ago.`;
    }
    if (diffDay < 7) {
      return `${diffDay} day(s) ago.`;
    }
    if (diffWeek < 4) {
      return `${diffWeek} week(s) ago.`;
    }
    if (diffMonth < 12) {
      return `${diffMonth} month(s) ago.`;
    }
    return `${diffYear} year(s) ago.`;
  }
  del() {
    if (window.confirm("confirm")) {
      this.firebaseService
        .deleteComment(this.comment.id)
        .then(() => {
          alert("deleteComplete");
        })
        .catch(err => {
          alert("deleteFailure");
        });
    }
  }
}
