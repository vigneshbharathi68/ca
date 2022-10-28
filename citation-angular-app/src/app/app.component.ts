import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'citation-angular-app';
  dropDownValue: string = "";
  search: string = "";

  setDropDownValue(value: string) {
    this.dropDownValue = value;
  }
  setSearchTypeValue(value: string) {
    this.search = value;
  }
}
