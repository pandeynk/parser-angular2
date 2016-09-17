import { Component, OnInit } from '@angular/core';

import { Card } from './card';

import './rxjs.operators';

import { CardService } from './card.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/cards.view.html',
    providers: [CardService]
})
export class AppComponent implements OnInit{

  errorMessage: string;
  cards: Card[];
  mode = 'Observable';

  constructor (private cardService: CardService) {}

  ngOnInit() { this.getCards(); }

  getCards() {
    this.cardService.getCards()
                       .subscribe(
                         cards => this.cards = cards,
                         error =>  this.errorMessage = <any>error,
                       () => console.log(this.cards) );
  }
}
