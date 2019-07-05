import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IDepartment } from './department';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private _url: string = "/assets/data/departments.json";

  constructor(private http: HttpClient) { }

  getDepartment(): Observable<IDepartment[]>{
    return this.http.get<IDepartment[]>(this._url)
                    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
