import { Component, OnInit } from '@angular/core';
import { Flight } from "app/entities/flight";
import { Http, URLSearchParams, Headers } from "@angular/http";
import { FlightService } from "app/flight-search/flight.service";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    providers: [FlightService]
})
export class FlightSearchComponent {

    from: string;
    to: string;
    flights: Array<Flight> = [];
    selectedFlight: Flight;

    constructor(private flightService: FlightService) {
    }

    search(): void {

        this.flightService
            .find(this.from, this.to)
            .subscribe(
                (flight: Array<Flight>) => {
                    this.flights = flight;
                },
                (errResponse) => {
                    console.error('Fehler beim Laden', errResponse);
                }
            );

    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }
}
