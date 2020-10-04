import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Restaurant } from '../modules/core/models/restaurant.model';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [NgbRatingConfig],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @Input() restaurant: Restaurant;

  
  constructor(config: NgbRatingConfig){
    config.max = 4;
    config.readonly = true
    
  }

  ngOnInit(): void {
  }

  
}
