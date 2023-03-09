import { Component, OnInit } from '@angular/core';

import { Card } from './../../interfaces/card';
import { LocalStorageService } from './../../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];
  queryInput: string = '';
  cardsFound: Card[] = [];

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.cards = this.localStorageService.getAllCards();
    this.cardsFound = this.cards;
  }

  searchCards(): void {
    const value = this.queryInput;

    this.cardsFound = this.cards.filter(card => {
      return card.name.toLowerCase().includes(value.toLowerCase())
        || card.type.toLowerCase().includes(value.toLowerCase())
        || card.class.toLowerCase().includes(value.toLowerCase())
        || card.id.toString().includes(value);
    });
  }
}
