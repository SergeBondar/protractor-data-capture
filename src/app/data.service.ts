import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://my-json-server.typicode.com/typicode/demo/profile';

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<object> {
    return this.http.get<object>(this.url);
  }
}
