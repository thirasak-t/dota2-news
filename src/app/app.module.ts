//module
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
//firbase
import { AngularFireModule } from "@angular/fire";
import { enviroment } from "./enviroment";

//component
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { Dota2Component } from "./dota2/dota2.component";
import { FirebaseService } from "./firebase.service";
import { DisplayNewsComponent } from "./display-news/display-news.component";
import { Dota2News00001Component } from "./dota2/dota2-news00001/dota2-news00001.component";
import { Dota2News00002Component } from "./dota2/dota2-news00002/dota2-news00002.component";
import { Dota2News00003Component } from "./dota2/dota2-news00003/dota2-news00003.component";
import { Dota2News00004Component } from "./dota2/dota2-news00004/dota2-news00004.component";
import { Dota2News00005Component } from "./dota2/dota2-news00005/dota2-news00005.component";
import { Dota2News00006Component } from "./dota2/dota2-news00006/dota2-news00006.component";
import { Dota2News00007Component } from "./dota2/dota2-news00007/dota2-news00007.component";
import { Dota2News00008Component } from "./dota2/dota2-news00008/dota2-news00008.component";
import { Dota2News00009Component } from "./dota2/dota2-news00009/dota2-news00009.component";
import { Dota2News00010Component } from "./dota2/dota2-news00010/dota2-news00010.component";
import { Dota2News00011Component } from "./dota2/dota2-news00011/dota2-news00011.component";
import { Dota2News00012Component } from "./dota2/dota2-news00012/dota2-news00012.component";
import { Dota2News00013Component } from "./dota2/dota2-news00013/dota2-news00013.component";
import { AddNewsComponent } from "./add-news/add-news.component";
//service
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: Dota2Component },
      { path: "dota2-00001", component: Dota2News00001Component },
      { path: "dota2-00002", component: Dota2News00002Component },
      { path: "dota2-00003", component: Dota2News00003Component },
      { path: "dota2-00004", component: Dota2News00004Component },
      { path: "dota2-00005", component: Dota2News00005Component },
      { path: "dota2-00006", component: Dota2News00006Component },
      { path: "dota2-00007", component: Dota2News00007Component },
      { path: "dota2-00008", component: Dota2News00008Component },
      { path: "dota2-00009", component: Dota2News00009Component },
      { path: "dota2-00010", component: Dota2News00010Component },
      { path: "dota2-00011", component: Dota2News00011Component },
      { path: "dota2-00012", component: Dota2News00012Component },
      { path: "dota2-00013", component: Dota2News00013Component },
      { path: "add-news", component: AddNewsComponent }
    ]),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    Dota2Component,
    DisplayNewsComponent,
    Dota2News00001Component,
    Dota2News00002Component,
    Dota2News00003Component,
    Dota2News00004Component,
    Dota2News00005Component,
    Dota2News00006Component,
    Dota2News00007Component,
    Dota2News00008Component,
    Dota2News00009Component,
    Dota2News00010Component,
    Dota2News00011Component,
    Dota2News00012Component,
    Dota2News00013Component
  ],
  bootstrap: [AppComponent],
  providers: [FirebaseService]
})
export class AppModule {}
