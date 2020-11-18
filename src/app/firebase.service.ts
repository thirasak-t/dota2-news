import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebase from "firebase/app";
import { News } from "./news";

@Injectable({ providedIn: "root" })
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}
  getNews() {
    let DocRef = this.firestore.collection<News>("news", e =>
      e.orderBy("date", "desc")
    );
    return DocRef.valueChanges();
  }
  addNews(n: string, l: string, img: string) {
    let news = {
      name: n,
      linl: l,
      image: img,
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
