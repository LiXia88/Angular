import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Hero} from './heroes/hero.model'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements InMemoryDbService{

  constructor() { }
  createDb(){
    return{
      heroes:[
         {id:1, name: "Saitama", lifeForce:100,},
         {id:2, name: "Goku", lifeForce:100,}
        ],
    }
  }
}
