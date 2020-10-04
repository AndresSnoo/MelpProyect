"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PlacesApiService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var throwError_1 = require("rxjs/internal/observable/throwError");
var catchError_1 = require("rxjs/internal/operators/catchError");
var environment_1 = require("src/environments/environment");
var PlacesApiService = /** @class */ (function () {
    function PlacesApiService(http) {
        this.http = http;
    }
    PlacesApiService.prototype.get = function (location) {
        return this.http.get(this.getUrl() + "&at=" + location.lat + "," + location.lng + "&cat=eat-drink&tf=plain", { headers: this.createHeaders() })
            .pipe(catchError_1.catchError(this.handlerErrorAndRaise));
    };
    PlacesApiService.prototype.getUrl = function () {
        return environment_1.environment.PLACES_API_URL;
    };
    PlacesApiService.prototype.createHeaders = function () {
        return new http_1.HttpHeaders({
        //'Accept': 'application/json'
        });
    };
    PlacesApiService.prototype.handlerErrorAndRaise = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: " + error.error.message;
        }
        else {
            console.log('Error Serser Side', error);
            // server-side error
            if (error.status === 401) { //Cliente no autenticado o sesión expirada
                errorMessage = "Error Code: " + error.status + "\nMessage: Usuario no autenticado";
                window.alert(errorMessage);
            }
            else if (error.status === 403) { //Cliente con credenciales no suficientes
                errorMessage = "Error Code: " + error.status + "\nMessage: Usuario con permisos insuficientes";
                window.alert(errorMessage);
            }
            else {
                console.log('Se propaga error para el control personalizado:: ', error.message, error.status);
            }
        }
        return throwError_1.throwError(error);
    };
    PlacesApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PlacesApiService);
    return PlacesApiService;
}());
exports.PlacesApiService = PlacesApiService;
