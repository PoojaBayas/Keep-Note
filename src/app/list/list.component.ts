import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css", "../../assets/css/bootstrap.min.css"]
})
export class ListComponent implements OnInit {
  checkedItems = [];
  checkedItem: string;
  task: string;
  tasks = [];

  inputName = new FormControl("", [Validators.minLength(3)]);

  delete(deleteItem) {
    const index = this.tasks.findIndex(item => item.name === deleteItem);
    this.tasks.splice(index, 1);
  }
 
  //MatCheckboxChange {checked,MatCheckbox}
  onClick() {
    if (this.task.length > 2) {
      this.tasks.push({ name: this.task });
      this.task = "";
    }
  }
  //MatCheckboxChange {indterminate,MatCheckbox},checkedItem Display state change
  OnChange(listItem, $event) {
    if ($event.checked == true) {
      const index = this.tasks.findIndex(item => item.name === listItem);

      this.checkedItems.push(listItem);
      this.tasks.splice(index, 1);
      document.getElementById("CheckListBlock").style.display = "block";
    }

    
  }
  OnindeterminateChange(listItem, $event) {
    if ($event.checked == false) {
      const index = this.checkedItems.findIndex(item => item === listItem);

      this.tasks.push({ name: listItem });

      this.checkedItems.splice(index, 1);
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
