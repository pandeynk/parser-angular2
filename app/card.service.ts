import { Injectable }     from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Card }           from './card';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CardService {

  constructor (private http: Http) {}

  private cardsUrl = 'https://api.parse.com/1/classes/blogg_doc';  // URL to web API

  getCards (): Observable<Card[]> {

    let headers=new Headers();
    headers.append('X-Parse-Application-Id', '5SME4uRWT5b6yse6V6XLPllOH5CYP8W6ya0JCFTu');
    headers.append('X-Parse-REST-API-Key', 'b2BUDOUbO145QSvxAiCykIltv1m8M3UyPwfkKz6X');
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.cardsUrl, {headers:headers})
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
