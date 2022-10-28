import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  citationSearch: string = "";
  @Output() onSubmit = new EventEmitter()

  constructor(@Inject(DOCUMENT) document: Document) { }
  
  sendValue(val: string) {
    this.onSubmit.emit(val)
  }

  ngOnInit(): void {
    document.getElementById("citationSearch")?.addEventListener('keyup', (event) => {
      if(event.keyCode === 13) {
        this.sendValue(this.citationSearch)
      }
    })
  }
  // onSubmit() {
  //   this.sendValue(this.citationSearch)
  // }

}
