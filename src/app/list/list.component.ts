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
  

  //CheckedItem Display in checked List(bottom  content)
  OnChange(listItem, $event) {
    if ($event.checked == true) {
      const index = this.tasks.findIndex(item => item.name === listItem);

      this.checkedItems.push(listItem);
      this.tasks.splice(index, 1);
      document.getElementById("CheckListBlock").style.display = "flex";
    }
  }

   // Unchecked Items  put back to top list
   OnindeterminateChange(Item, $event) {
    console.log('clicked item='+Item)
    if ($event.checked == false) {
      const index = this.checkedItems.findIndex(item => item === Item);

      this.tasks.push({ name: Item });

      this.checkedItems.splice(index, 1);
    }
  }
  //delete Unchecked Item (top content)
  deleteUncheckedItem(deleteItem) {
    const index = this.tasks.findIndex(item => item.name === deleteItem);
    this.tasks.splice(index, 1);
  }

 
  //delete Checked Item
  deleteCheckedItem(deleteItem) {
    const index = this.tasks.findIndex(item => item.name === deleteItem);
    this.checkedItems.splice(index, 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
