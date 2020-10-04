import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MouseEvent } from '@agm/core';

import {Location} from "../modules/core/models/location.model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {

  @Output()
  mapClicked: EventEmitter<Location>;

  zoom: number = 14;

  // initial center position for the map
  lat = 19.430411335795643;
  lng = -99.13287979386078;

  markers: marker[] = [];

  constructor() { 
    this.mapClicked = new EventEmitter<Location>();
  }

  ngOnInit(): void {
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClick($event: MouseEvent) {
    console.log($event.coords.lat);
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
    let location: Location = new Location();
    location.lat = $event.coords.lat;
    location.lng = $event.coords.lng;
    this.mapClicked.emit(location);
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
