import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownButtonComponent } from './components/dropdown-button/dropdown-button.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { DetailTableComponent } from './components/detail-table/detail-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownButtonComponent,
    SearchInputComponent,
    DetailTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
