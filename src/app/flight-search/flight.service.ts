import { Injectable, Inject } from '@angular/core';
import { Http, URLSearchParams, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Flight } from "app/entities/flight";

@Injectable()
export class FlightService {

    constructor(private http: Http) {
    }

    find(from: string, to: string): Observable<Flight[]> {

        let url = 'http://www.angular.at/api/flight';

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this
                .http
                .get(url, { search, headers })
                .map(resp => resp.json());

    }

}
