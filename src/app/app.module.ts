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
import { AddNewsComponent } from "./add-news/add-news.component";
import { Dota2NewsComponent } from "./dota2-news/dota2-news.component";
import { DisplayComponent } from "./display/display.component";
//service
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: Dota2Component },
      { path: "add-news", component: AddNewsComponent },
      { path: "dota2/:id", component: Dota2NewsComponent }
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
    AddNewsComponent,
    Dota2NewsComponent,
    DisplayComponent
  ],
  bootstrap: [AppComponent],
  providers: [FirebaseService]
})
export class AppModule {}
