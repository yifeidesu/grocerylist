import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({ providedIn: 'root' })
export class ItemService {
  private API_URL = environment.API_URL;

  constructor(
    private http: HttpClient) { }

  /** GET Itemes from the server */
  getItems(): Observable<any> {
    return this.http.get<any>(this.API_URL, httpOptions)
      .pipe(
        catchError(this.handleError<any>('get items'))
      );
  }

  getItemById(id): Observable<any> {
    return this.http.get(this.API_URL + id, httpOptions).pipe(
      catchError(this.handleError<any>('Update item'))
    );
  }

  addItem(item): Observable<any> {
    return this.http.post(this.API_URL, item, httpOptions).pipe(
      catchError(this.handleError<any>('Update item'))
    );
  }

  updateItem(item): Observable<any> {
    return this.http.put(this.API_URL + item._id, item, httpOptions).pipe(
      catchError(this.handleError<any>('Update item'))
    );
  }

  deleteItem(id): Observable<any> {
    return this.http.delete(this.API_URL + id, httpOptions).pipe(
      catchError(this.handleError<any>('Update item'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + error);
      // Returning empty.
      return of(result as T);
    };
  }
}
