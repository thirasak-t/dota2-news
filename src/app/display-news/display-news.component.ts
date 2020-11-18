import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { News } from "../news";
import { FirebaseService } from "../firebase.service";
@Component({
  selector: "app-display-news",
  templateUrl: "./display-news.component.html",
  styleUrls: ["./display-news.component.css"]
})
export class DisplayNewsComponent implements OnInit {
  constructor(private firebaseService: FirebaseService) {}
  @Input() news: News;

  ngOnInit() {
    this.news = {
      ...this.news,
      date: this.timeAgo(this.news.date.toDate())
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
}
