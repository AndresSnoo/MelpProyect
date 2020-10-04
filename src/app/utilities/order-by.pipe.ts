import { Pipe, PipeTransform } from '@angular/core';
import { CrudService } from '../modules/core/services/crud.service';

@Pipe({
  name: 'orderPipe'
})
export class OrderByPipe implements PipeTransform {

  constructor( private crudService: CrudService){}



   transform(catalog: CrudService[], parameters: any): CrudService[] {
    const newEdLev: CrudService[] = [];
    let flag: boolean;
   
    if(!catalog || !parameters){
      return catalog;
      
    }
// evalua si el parametro ingresado es igual a rating 
    if(parameters == "rating"){
      //return catalog.sort(sortBy(parameters));
     let cat = catalog.sort((a,b) => 
         b[parameters] - a[parameters] )
         
         return cat;
      
    }
    else 
      if (parameters == "name"){
     let cat =   catalog.sort((a,b) => 
          a[parameters] > b[parameters] ? 1 : -1);
        return cat;
      }
     
      
    
    
  }

}
