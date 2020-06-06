import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DateCellComponent } from './components/date-cell/date-cell.component';

@NgModule({
  declarations: [AppComponent, DateCellComponent],
  imports: [BrowserModule, CommonModule, SweetAlert2Module.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
