import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventory } from './inventory';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private portfolioAPI = 'https://api-portfolio-65p75.ondigitalocean.app/items';
  // private portfolioAPI = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  addItem(item: Inventory): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<any>(this.portfolioAPI, item, httpOptions);
      // .pipe(
      //   catchError(this.handleError('addItem', item))
      // );
  }

  updateItem(item: Inventory): Observable<any> {
    return this.http.patch<any>(this.portfolioAPI, item);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}

