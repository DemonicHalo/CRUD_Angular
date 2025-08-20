import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { HttpClientModule } from "@angular/common/http";
import { UpdateComponent } from "./update/update.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
@NgModule({
  declarations: [AppComponent, ListComponent, UpdateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
