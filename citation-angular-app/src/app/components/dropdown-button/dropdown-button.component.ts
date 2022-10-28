import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.css']
})
export class DropdownButtonComponent implements OnInit {
  active: boolean = false;
  selectedValue: string = "select an option";
  @Output() onResult = new EventEmitter();
  dropdownList: string[] = ["My Cases"];

  constructor() { }

  ngOnInit(): void {
  }
  onClick () {
    this.active = !this.active
  }
  onClickDropDown(value: string) {
    console.log(value)
    this.onResult.emit(value)
    this.selectedValue = value;
    this.active = false;
  }

}
