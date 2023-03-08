import { Card } from './../interfaces/card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  createCard(key: string, value: Card[]) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  updateCard(){}

  getCard(key: string): Card[] {
    return JSON.parse(this.storage.getItem(key) || '{}')
  }

  getAllCards() {
    const data = [];
    for (let i = 0; i < localStorage.length; i++) {
      const item = localStorage.getItem(localStorage.key(i) || '{}');
      data.push(JSON.parse(item || '{}'));
    }
    return [].concat(...data);
  };

  removeCard(id: number, cards: Card[]) {
    const key = id.toString();
    const index = cards.findIndex(item => item.id === id);

    this.storage.removeItem(key);
    cards.splice(index, 1);
  }

}
