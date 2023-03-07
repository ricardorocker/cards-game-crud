import { Card } from './../../interfaces/card';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.cards = this.localStorageService.getAllCards();
    console.log(this.cards)
  }

  // onRemoveCard(card: Card) {
  //   this.localStorageService.removeCard(JSON.stringify(card));
  //   const index = this.cards.indexOf(card.id);
  //   this.cards.splice()
  // }
}
