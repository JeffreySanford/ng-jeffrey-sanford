import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventory } from './inventory';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Item } from 'src/app/services/item';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  // private portfolioAPI = 'http://localhost:3000/inventory';
  private portfolioAPI = 'http://jeffreysanford.us:3000/inventory';

  inventory!: Observable<Inventory[]>;

  constructor(private http: HttpClient) {}

  getInventory() {
    return (this.inventory = this.http.get<Inventory[]>(this.portfolioAPI));
  }
  addItem(item: Inventory): Observable<any> {
    const payload = item.toString();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        payload,
      }),
    };

    return this.http.post<any>(this.portfolioAPI, item, httpOptions);
  }

  updateItem(item: Inventory): Observable<any> {
    console.dir('update inventory' + item);
    return this.http.patch<Item[]>(this.portfolioAPI, item);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
