import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
//import { Item } from '../../../models/item';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({ providedIn: 'root' })
export class ItemService {

  //private itemsUrl = 'api/Itemes';  // URL to web api
  //private ITEMS_URL = 'http://localhost:3000/api/items/';
  private ITEMS_URL = 'api/items/';

  //private ITEMS_ID_URL = 'http://localhost:3000/items';

  constructor(
    private http: HttpClient) { }

  /** GET Itemes from the server */
  getItems(): Observable<any> {
    return this.http.get<any>(this.ITEMS_URL, httpOptions)
      .pipe(
        tap(Itemes => console.log('fetched Itemes' + Itemes))
      );
  }

  getItemById(id): Observable<any> {
    console.log(id);
    return this.http.get(this.ITEMS_URL + id, httpOptions);
  }

  addItem(item): Observable<any> {
    console.log(item);
    return this.http.post(this.ITEMS_URL, item, httpOptions);
  }

  updateItem(item): Observable<any> {
    console.log(item);
    return this.http.put(this.ITEMS_URL + item._id, item, httpOptions);
  }

  deleteItem(id): Observable<any>{
    return this.http.delete(this.ITEMS_URL + id, httpOptions);
  }

  // /** GET Item by id. Return `undefined` when id not found */
  // getItemNo404<Data>(id: number): Observable<Item> {
  //   const url = `${this.itemsUrl}/?id=${id}`;
  //   return this.http.get<Item[]>(url)
  //     .pipe(
  //       map(Itemes => Itemes[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} Item id=${id}`);
  //       }),
  //       catchError(this.handleError<Item>(`getItem id=${id}`))
  //     );
  // }

  // /** GET Item by id. Will 404 if id not found */
  // getItem(id: number): Observable<Item> {
  //   const url = `${this.itemsUrl}/${id}`;
  //   return this.http.get<Item>(url).pipe(
  //     tap(_ => this.log(`fetched Item id=${id}`)),
  //     catchError(this.handleError<Item>(`getItem id=${id}`))
  //   );
  // }

  // /* GET Itemes whose name contains search term */
  // searchItemes(term: string): Observable<Item[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty Item array.
  //     return of([]);
  //   }
  //   return this.http.get<Item[]>(`${this.itemsUrl}/?name=${term}`).pipe(
  //     tap(_ => this.log(`found Itemes matching "${term}"`)),
  //     catchError(this.handleError<Item[]>('searchItemes', []))
  //   );
  // }

  // //////// Save methods //////////

  // /** POST: add a new Item to the server */
  // addItem (Item: Item): Observable<Item> {
  //   return this.http.post<Item>(this.itemsUrl, Item, httpOptions).pipe(
  //     tap((Item: Item) => this.log(`added Item w/ id=${Item.id}`)),
  //     catchError(this.handleError<Item>('addItem'))
  //   );
  // }

  // /** DELETE: delete the Item from the server */
  // deleteItem (Item: Item | number): Observable<Item> {
  //   const id = typeof Item === 'number' ? Item : Item.id;
  //   const url = `${this.itemsUrl}/${id}`;

  //   return this.http.delete<Item>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted Item id=${id}`)),
  //     catchError(this.handleError<Item>('deleteItem'))
  //   );
  // }

  // /** PUT: update the Item on the server */
  // updateItem (Item: Item): Observable<any> {
  //   return this.http.put(this.itemsUrl, Item, httpOptions).pipe(
  //     tap(_ => this.log(`updated Item id=${Item.id}`)),
  //     catchError(this.handleError<any>('updateItem'))
  //   );
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError() {
    // return (error: any): Observable<T> => {

    //   // TODO: send the error to remote logging infrastructure
    //   console.error(error); // log to console instead

    //   // TODO: better job of transforming error for user consumption
    //   // this.log(`${operation} failed: ${error.message}`);

    //   // Let the app keep running by returning an empty result.
    //   return of(result as T);
    // };
  }

  // /** Log a ItemService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add(`ItemService: ${message}`);
  // }
}
