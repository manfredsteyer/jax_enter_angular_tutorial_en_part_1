import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from "app/flight-search/flight-search.component";
import { FlightService } from "app/flight-search/flight.service";
import { BASE_URL } from "app/app.tokens";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FlightSearchComponent
  ],
  providers: [
    // { provide: FlightService, useClass: FlightService }
    {
      provide: BASE_URL,
      useValue: 'http://www.angular.at/api'
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
