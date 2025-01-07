import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishItem } from '../../model/wishItem';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams()
    };
  }

  private getAuthOptions() {
    const options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', 'some-kind-of-token');
    return options;
  }

  getWishes() {
    const options = this.getStandardOptions();
    options.params = options.params.set('format', 'json');
    return this.http.get('assets/wishes.json', options).pipe(catchError(this.handleError));
  }

  handleError(response: HttpErrorResponse): Observable<never> {
    if (response.status === 0) {
      console.error('There is an issue with the client network connection.', response.error);
    } else {
      console.error(`Server-side Error: ${response.status}: ${response.error}`);
    }
    return throwError(() => new Error('There is a problem with the service. We are notified & working on it.'));
  }

  addWish(wish: WishItem) {
    const options = this.getAuthOptions();
    return this.http.post('assets/wishes.json', wish, options);
  }

}
