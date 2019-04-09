import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TLBTableComponent } from './components/tlbtable/tlbtable.component';
import { PageTableComponent } from './components/page-table/page-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TLBTableComponent,
    PageTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
