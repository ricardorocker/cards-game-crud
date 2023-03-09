import { Component, OnInit } from '@angular/core';

import { Card } from '../../models/card';
import { LocalStorageService } from './../../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];
  cardsFound: Card[] = [];
  queryInput: string = '';

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.cards = this.localStorageService.getAllCards();
    this.cardsFound = this.cards;
    this.cardsFound.sort((a, b) => {
      return (a.id > b.id) ? 1 : -1
    })
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
