import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css", "../../assets/css/bootstrap.min.css"]
})
export class ListComponent implements OnInit {
  task: string;
  tasks = [];
  onClick() {
    this.tasks.push({ name: this.task });
    this.task = "";
  }
  constructor() {}

  ngOnInit(): void {}
}
