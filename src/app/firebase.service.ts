import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebase from "firebase/app";
import { News } from "./news";
import { Report } from "./report";
import { Comment } from "./comment";
@Injectable({ providedIn: "root" })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}
  getNews() {
    let DocRef = this.firestore.collection<News>("news", e =>
      e.orderBy("date", "desc")
    );
    return DocRef.valueChanges();
  }
  addReport(n: string, p: string) {
    let report = {
      topic: n,
      problem: p,
      date: firebase.default.firestore.Timestamp.now()
    };
    const ref = this.firestore.collection("report").add(report);
    ref.then(newRef => {
      const upDateID = {
        id: newRef.id
      };
      newRef.update(upDateID);
    });
    return ref;
  }
  addComment(n: string, t: string, id_n: string) {
    let comment = {
      name: n,
      text: t,
      id_news: id_n,
      date: firebase.default.firestore.Timestamp.now()
    };
    const ref = this.firestore.collection("comment").add(comment);
    ref.then(newRef => {
      const upDateID = {
        id: newRef.id
      };
      newRef.update(upDateID);
    });
    return ref;
  }
  getComment() {
    let DocRef = this.firestore.collection<Comment>("comment", e =>
      e.orderBy("date", "desc")
    );
    return DocRef.valueChanges();
  }
  deletComment(id: string) {
    return this.firestore
      .collection("comment")
      .doc(id)
      .delete();
  }
  addNews(n: string, t: string, image: string, ds: string) {
    let news = {
      name: n,
      text: t,
      img: image,
      dataSource: ds,
      date: firebase.default.firestore.Timestamp.now()
    };
    const ref = this.firestore.collection("news").add(news);
    ref.then(newRef => {
      const upDateID = {
        id: newRef.id
      };
      newRef.update(upDateID);
    });
    return ref;
  }
  deleteNews(id: string) {
    return this.firestore
      .collection("news")
      .doc(id)
      .delete();
  }
  getNewsByID(id: string) {
    let DocRef = this.firestore.collection<News>("news", e =>
      e.where("id", "==", id)
    );
    return DocRef.valueChanges();
  }
}
