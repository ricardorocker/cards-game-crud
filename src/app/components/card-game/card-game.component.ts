import { LocalStorageService } from './../../services/local-storage.service';
import { Card } from './../../interfaces/card';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent {
  @Input() cards: Card[] = [];
  @Input() hasFooter: boolean = false;

  constructor(private localStorageService: LocalStorageService) {}

  onRemoveCard(card: Card) {
    this.localStorageService.removeCard(card.id, this.cards);
  }
}
