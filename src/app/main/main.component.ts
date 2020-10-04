import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '../modules/core/models/location.model';
import { PlacesApiResponse } from '../modules/core/models/places-api-response.model';
import { Restaurant } from '../modules/core/models/restaurant.model';
import { CrudService } from '../modules/core/services/crud.service';
import { PlacesApiService } from '../modules/core/services/places-api.service';
import { OrderByPipe } from '../utilities/order-by.pipe';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[OrderByPipe],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  allRestaurants: Restaurant[];

  restaurantsToShow: any[];

  restaurantsAround: any[];

  order: string;

  constructor(private crudService: CrudService, private placesService: PlacesApiService) {

  }

  ngOnInit(): void {
    this.crudService.get<Restaurant[]>().subscribe((restaurants: Restaurant[]) => {
      // console.log(any);
      this.allRestaurants = restaurants;
      this.restaurantsToShow = [];

      //console.log(this.restaurants);
    },
      error => { console.log("error") }
    );
  }

  searchNearRestaurants($event: Location): void {
    console.log($event);
    this.placesService.get($event).subscribe((response: PlacesApiResponse) => {
      console.log(response);
      this.restaurantsAround = [];
      response.results.items.forEach(item => {
        this.restaurantsAround.push({ name: item.title, distance: item.distance, averageRating: item.averageRating, address: item.vicinity })
      });
      console.log(this.restaurantsAround);
    },
      error => console.log("error")
    );
  }

  //función quw recibe el tipo del ordenamiento del dropdown
 sort(accion){
    this.order = accion;
 }

}
