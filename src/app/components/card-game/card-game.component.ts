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

  // ngOnInit(): void{
  //   console.log("App CARD-GAME: ",this.card);
  // }

  onRemoveCard(card: Card) {

  }

}
