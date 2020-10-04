"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MapComponent = void 0;
var core_1 = require("@angular/core");
var location_model_1 = require("../modules/core/models/location.model");
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.zoom = 14;
        // initial center position for the map
        this.lat = 19.430411335795643;
        this.lng = -99.13287979386078;
        this.markers = [];
        this.mapClicked = new core_1.EventEmitter();
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    MapComponent.prototype.mapClick = function ($event) {
        console.log($event.coords.lat);
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
        var location = new location_model_1.Location();
        location.lat = $event.coords.lat;
        location.lng = $event.coords.lng;
        this.mapClicked.emit(location);
    };
    MapComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    __decorate([
        core_1.Output()
    ], MapComponent.prototype, "mapClicked");
    MapComponent = __decorate([
        core_1.Component({
            selector: 'app-map',
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
