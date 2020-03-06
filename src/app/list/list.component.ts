import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

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
      this.checkedItems.push(test);
      document.getElementById("Test").style.display = "block";
      const index: number = this.tasks.indexOf(this.checkedItem);
      if (index !== -1) {
          this.tasks.splice(index, 1);
      }   
    } 
    
    //MatCheckboxChange {checked,MatCheckbox}
}
  constructor() {}

  ngOnInit(): void {}
}
