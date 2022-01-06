import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Result } from '../main-page/results-table/results'

@Injectable({
  providedIn: 'root'
})
export class HitCheckService {

  constructor(private http: HttpClient) { }

  getPointsRequest() {
    return this.http.get<Result[]>("http://localhost:8080/api/points", {observe: 'body', responseType: 'json'})
  }

}
