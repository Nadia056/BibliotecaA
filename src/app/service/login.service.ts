import { Injectable } from '@angular/core';
import {  HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {  Observable, Subject, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { env } from 'src/enviroments/env';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL = env.apiUrl;

  constructor(private http: HttpClient) { }

  login(form:any)
  {
    

    return this.http.post<any>(this.URL+'login',form) .pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          window.alert(error.error.error);
        } else {
          window.alert('An error occurred. Please try again later');
        }
        return throwError(() => new Error('Server Down'));
      }
      )
    );
  }

  logout(): Observable<any>
  {
    const token = localStorage.getItem('token');
    console.log(token);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
  
    });
    return this.http.post<any>(this.URL+'logout',null,{headers}) .pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          window.alert(error.error.error);
        } else {
          window.alert('An error occurred. Please try again later');
        }
        return throwError(() => new Error('Server Down'));
      }
      )
    );
    
  }
}
