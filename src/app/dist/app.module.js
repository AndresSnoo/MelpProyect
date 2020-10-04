"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var core_2 = require("@agm/core");
var app_component_1 = require("./app.component");
var main_component_1 = require("./main/main.component");
var core_module_1 = require("./modules/core/core.module");
var http_1 = require("@angular/common/http");
var card_component_1 = require("./card/card.component");
var map_component_1 = require("./map/map.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                main_component_1.MainComponent,
                card_component_1.CardComponent,
                map_component_1.MapComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                core_module_1.CoreModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                core_2.AgmCoreModule.forRoot({
                // please get your own API key here:
                // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
                // apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
                })
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
