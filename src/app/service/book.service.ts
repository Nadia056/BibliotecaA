import { Injectable } from '@angular/core';
import {  HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {  Observable, Subject, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { retry } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { env } from 'src/enviroments/env';
import { Book } from '../Models/book';
import { Prestamo } from '../Models/prestamo';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _refresh$ = new Subject<void>();
  private  url=env.apiUrl;

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      console.error('An error occurred:', error.error);
    } else {
      console.error('El backend devolvió el código ${error.status}, el cuerpo era:', error.error)
    }
    return throwError(() => new Error('Algo malo sucedió; por favor, inténtelo de nuevo más tarde.'));
  }

  constructor(private http: HttpClient) { }
  get refresh$() { return this._refresh$ }

  getBooks()
  {
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this.http.get(this.url+"libros",{headers});
  }
  bookStore(form:Book)
  {
      return this.http.post<any>(this.url+'libros/registro',form) .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 422) {
            window.alert('Fill all the fields');
          } else {
            window.alert('An error occurred. Please try again later');
          }
          return throwError(() => new Error('Server Down'));
        })
      );
  }
  updateBook( id:any,form:Book)
  {
    return this.http.put<any>(this.url+'libros/'+id,form) .pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 422) {
          window.alert('Fill all the fields');
        } else {
          window.alert('An error occurred. Please try again later');
        }
        return throwError(() => new Error('Server Down'));
      }
      )
    );
  }
  deleteBook(id:any)
  {
    return this.http.delete<any>(this.url+'libros/'+id) .pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 422) {
          window.alert('Fill all the fields');
        } else {
          window.alert('An error occurred. Please try again later');
        }
        return throwError(() => new Error('Server Down'));
      }
      )
    );

  }

  
  prestamo(form:any)
  {
    return this.http.post<any>(this.url+'prestamos/registro',form) .pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 422) {
          window.alert('Fill all the fields');
        } else {
          window.alert('An error occurred. Please try again later');
        }
        return throwError(() => new Error('Server Down'));
      })
    );
  }
  getClients()
  {
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this.http.get(this.url+"clientes",{headers});
  }
  getPrestamos()
  {
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this.http.get(this.url+"prestamos",{headers});
  }
  updatePrestamo( id:any,form:Prestamo)
  {
    return this.http.put<any>(this.url+'prestamos/'+id,form) .pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 422) {
          window.alert('Fill all the fields');
        } else {
          window.alert('An error occurred. Please try again later');
        }
        return throwError(() => new Error('Server Down'));
      }
      )
    );
  }
  deletePrestamo(id:any)
  {
    return this.http.delete<any>(this.url+'prestamos/'+id) .pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 422) {
          window.alert('Fill all the fields');
        } else {
          window.alert('An error occurred. Please try again later');
        }
        return throwError(() => new Error('Server Down'));
      }
      )
    );

  }
  oneprestamo()
  {
    const id=localStorage.getItem('id');
    console.log(id,'id');
    console.log(this.url+"prestamo/"+id,'url');
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this.http.get(this.url+"prestamo/"+id,{headers});


  }
}
