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

  getAllCards() {
    const data = [];
    for (let i = 0; i < localStorage.length; i++) { // itera através dos elementos no localStorage
      const item = localStorage.getItem(localStorage.key(i) || '{}'); // pega o item atual do localStorage
      data.push(JSON.parse(item || '{}')); // adiciona o item convertido em um objeto para o array data
    }
    return [].concat(...data); // retorna o array data como um array com apenas objetos
  };
}
