import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent }  from './app.component';
import 'hammerjs';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  MaterialModule.forRoot() ],
  declarations: [ AppComponent ],
  providers:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
