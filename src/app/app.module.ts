import { NgModule }      from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule }  from '@angular/material';
import { HttpModule }  from '@angular/http';
import { AppComponent }  from './app.component';
import 'hammerjs';



@NgModule({
  imports:      [ 
                  BrowserModule, 
                  MaterialModule.forRoot(),
                  FormsModule,
                  HttpModule],
  declarations: [ AppComponent ],
  providers:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
