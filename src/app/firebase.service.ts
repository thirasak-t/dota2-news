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
}