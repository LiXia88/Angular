import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor() {}
  createDb(): { heroes: Hero[] } {
    return {
      heroes: [
        {id: 8, name: "Spiderman", lifeForce: 32}
      ],
    };
  }

  // Overriding this is intended to solve the problem "Collection 'heroes' id
  // type is non-numeric or unknown. Can only generate numeric ids." when the
  // list is empty. See https://github.com/angular/angular/issues/22120
  genId(heroes: Hero[]): number {
    if (heroes.length > 0) {
      return Math.max(...heroes.map((hero) => hero.id)) + 5;
    } else {
      return 9;
    }
  }
}
