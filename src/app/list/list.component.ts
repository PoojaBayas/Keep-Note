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
  //checkedItem: string;
  task: string;
  tasks = [];
  errMsg: string = "";

  //Listing the input
  onAddItem() {
    if (this.task && this.task.length >= 1) {
      this.tasks.push({ name: this.task });
      this.task = "";
      this.errMsg = "";
    } else {
      this.errMsg = "Please enter your note";
    }
  }

  //CheckedItem Display in Archived List(bottom  content)
  OnAddToArchivedList(listItem, $event) {
    if ($event.checked == true) {
      const index = this.tasks.findIndex(item => item.name === listItem);

      this.checkedItems.push(listItem);
      this.tasks.splice(index, 1);
      document.getElementById("CheckListBlock").style.display = "flex";
    }
  }

  // Archived Items  put back to top list
  OnRemoveFromArchivedList(Item, $event) {
    if ($event.checked == false) {
      const index = this.checkedItems.findIndex(item => item === Item);

      this.tasks.push({ name: Item });

      this.checkedItems.splice(index, 1);
    }
  }
  //delete List Item
  deleteListItem(deleteItem) {
    console.log("deledted item=" + deleteItem);
    const index = this.tasks.findIndex(item => item.name === deleteItem);
    this.tasks.splice(index, 1);
  }

  //delete Archived Item
  deleteArchivedItem(deleteItem) {
    const index = this.checkedItems.findIndex(item => item === deleteItem);

    this.checkedItems.splice(index, 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
