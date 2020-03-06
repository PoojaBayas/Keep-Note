import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import "hammerjs";
import { MatIconModule } from "@angular/material/icon";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [BrowserModule, FormsModule, MatIconModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
