import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MatCheckboxModule } from "@angular/material/checkbox";

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

  onClick() {
    
    this.tasks.push({ name: this.task });
    // console.log(this.task.indexOf);
    this.task = "";
  }
  OnChange(test, $event) {
    if ($event.checked == true) {
      const index = this.tasks.findIndex(item => item.name === test);
      console.log("index is=" + index);
      this.checkedItems.push(test);
      this.tasks.splice(index, 1);
      document.getElementById("Test").style.display = "block";
    }

    //MatCheckboxChange {checked,MatCheckbox}
  }
  constructor() {}

  ngOnInit(): void {}
}
