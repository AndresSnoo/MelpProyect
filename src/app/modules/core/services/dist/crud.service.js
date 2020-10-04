"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CrudService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("src/environments/environment");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var CrudService = /** @class */ (function () {
    function CrudService(injector) {
        this.http = injector.get(http_1.HttpClient);
    }
    CrudService.prototype.get = function () {
        return this.http.get(this.getUrl(), { headers: this.createHeaders() })
            .pipe(operators_1.catchError(this.handlerErrorAndRaise));
    };
    CrudService.prototype.post = function (url, data) {
        return this.http.post(this.getUrl(), data, { headers: this.createHeaders() })
            .pipe(operators_1.catchError(this.handlerErrorAndRaise));
    };
    CrudService.prototype.put = function (url, data) {
        return this.http.put(this.getUrl(), data, { headers: this.createHeaders() })
            .pipe(operators_1.catchError(this.handlerErrorAndRaise));
    };
    CrudService.prototype["delete"] = function (url) {
        return this.http["delete"](this.getUrl(), { headers: this.createHeaders() })
            .pipe(operators_1.catchError(this.handlerErrorAndRaise));
    };
    CrudService.prototype.getUrl = function () {
        return environment_1.environment.RESTAURANT_URL;
    };
    CrudService.prototype.createHeaders = function () {
        return new http_1.HttpHeaders({
        //'Accept': 'application/json'
        });
    };
    CrudService.prototype.handlerErrorAndRaise = function (error) {
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
        return rxjs_1.throwError(error);
    };
    CrudService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CrudService);
    return CrudService;
}());
exports.CrudService = CrudService;
