"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RestaurantService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var crud_service_1 = require("./crud.service");
var RestaurantService = /** @class */ (function (_super) {
    __extends(RestaurantService, _super);
    function RestaurantService(injector) {
        return _super.call(this, injector) || this;
    }
    RestaurantService.prototype.getUrl = function () {
        return environment_1.environment.RESTAURANT_URL;
    };
    RestaurantService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RestaurantService);
    return RestaurantService;
}(crud_service_1.CrudService));
exports.RestaurantService = RestaurantService;
