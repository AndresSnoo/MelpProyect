import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CoreModule } from './modules/core/core.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { MapComponent } from './map/map.component';
import { OrderByPipe } from './utilities/order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    MapComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
     // apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    }),
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
