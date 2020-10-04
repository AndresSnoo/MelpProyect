import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private http: HttpClient;

  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  get<T>(): Observable<any> {
    return this.http.get<T>(this.getUrl(), { headers: this.createHeaders() })
      .pipe(catchError(this.handlerErrorAndRaise));
  }

  post<T>(url: string, data: any): Observable<any> {
    return this.http.post<T>(this.getUrl(), data, { headers: this.createHeaders() })
      .pipe(catchError(this.handlerErrorAndRaise));
  }

  put<T>(url: string, data: any): Observable<any> {
    return this.http.put<T>(this.getUrl(), data, { headers: this.createHeaders() })
      .pipe(catchError(this.handlerErrorAndRaise));
  }

  delete<T>(url: string): Observable<any> {
    return this.http.delete<T>(this.getUrl(), { headers: this.createHeaders() })
      .pipe(catchError(this.handlerErrorAndRaise));
  }

  protected getUrl(): string {
    return environment.RESTAURANT_URL;
  }

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({

      //'Accept': 'application/json'
    });
  }

  private handlerErrorAndRaise(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      console.log('Error Serser Side', error);
      // server-side error
      if (error.status === 401) {//Cliente no autenticado o sesión expirada
        errorMessage = `Error Code: ${error.status}\nMessage: Usuario no autenticado`;
        window.alert(errorMessage);
      } else if (error.status === 403) {//Cliente con credenciales no suficientes
        errorMessage = `Error Code: ${error.status}\nMessage: Usuario con permisos insuficientes`;
        window.alert(errorMessage);
      } else {
        console.log('Se propaga error para el control personalizado:: ', error.message, error.status);
      }
    }
    return throwError(error);
  }
}
