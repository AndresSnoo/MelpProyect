import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { environment } from 'src/environments/environment';

import { Location } from '../models/location.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesApiService {

  constructor(private http: HttpClient) {
  }

  get<T>(location: Location): Observable<any> {
    return this.http.get<T>(this.getUrl() + "&at=" + location.lat + "," + location.lng + "&cat=eat-drink&tf=plain", { headers: this.createHeaders() })
      .pipe(catchError(this.handlerErrorAndRaise));
  }

  protected getUrl(): string {
    return environment.PLACES_API_URL;
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
