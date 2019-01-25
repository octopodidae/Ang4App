import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
//import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { AboutService } from "../services/about.service";
import { GalleryComponent } from "./gallery/gallery.component";

const appRoutes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "gallery", component: GalleryComponent },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    }),
    /*HttpClientModule,*/
    HttpModule
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule {}
