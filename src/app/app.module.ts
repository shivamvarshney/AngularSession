import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { DirectiveexampleComponent } from './directiveexample/directiveexample.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { CustompipeexamplePipe } from './custompipeexample.pipe';
import { SearchByPipe } from './search-by.pipe' ;


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    DirectiveexampleComponent,
    PipeexampleComponent,
    CustompipeexamplePipe,
    SearchByPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
