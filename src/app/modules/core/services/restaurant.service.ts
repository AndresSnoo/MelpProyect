import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService extends CrudService {

  constructor(injector: Injector) {
    super(injector);
  }

  protected getUrl():string {
    return environment.RESTAURANT_URL;
  }


}
