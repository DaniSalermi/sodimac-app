import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-assistant",
  templateUrl: "./assistant.component.html",
  styleUrls: ["./assistant.component.scss"]
})
export class AssistantComponent implements OnInit {
  hallNumber = new FormControl();
  numberInput: number;
  name = new FormControl();
  nameInput: string;

  constructor() {}

  ngOnInit() {}
  btnSale() {
    this.numberInput = this.hallNumber.value;
    console.log(this.numberInput);
    this.nameInput = this.name.value;
    console.log(this.nameInput);
  }
}
