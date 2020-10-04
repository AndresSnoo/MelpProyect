"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainComponent = void 0;
var core_1 = require("@angular/core");
var MainComponent = /** @class */ (function () {
    function MainComponent(crudService, placesService) {
        this.crudService = crudService;
        this.placesService = placesService;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crudService.get().subscribe(function (restaurants) {
            // console.log(any);
            _this.allRestaurants = restaurants;
            _this.restaurantsToShow = [];
            _this.restaurantsToShow.push(_this.allRestaurants[0]);
            _this.restaurantsToShow.push(_this.allRestaurants[1]);
            _this.restaurantsToShow.push(_this.allRestaurants[2]);
            //console.log(this.restaurants);
        }, function (error) { console.log("error"); });
    };
    MainComponent.prototype.searchNearRestaurants = function ($event) {
        var _this = this;
        console.log($event);
        this.placesService.get($event).subscribe(function (response) {
            console.log(response);
            _this.restaurantsAround = [];
            response.results.items.forEach(function (item) {
                _this.restaurantsAround.push({ name: item.title, distance: item.distance, averageRating: item.averageRating, address: item.vicinity });
            });
            console.log(_this.restaurantsAround);
        }, function (error) { return console.log("error"); });
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
