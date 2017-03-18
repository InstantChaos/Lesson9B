import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestMethod, Response } from '@angular/http';

@Injectable()
export class GamesService {
    //Instance variables
    private _baseURL = '/api';

    //Constructor
    constructor(private _http: Http) {
    }

    list(): Observable<any> {
        return this._http
            .get(this._baseURL)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        return Observable.throw(error.json().message || 'Server Error');
    }
}