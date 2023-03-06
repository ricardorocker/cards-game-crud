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

  getCard(key: string): Card[] {
    return JSON.parse(this.storage.getItem(key) || '{}')
  }
}
