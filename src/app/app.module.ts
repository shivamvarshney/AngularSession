import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { RajaniComponent } from './rajani/rajani.component';
import { FormsModule } from '@angular/forms' ;


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    RajaniComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
