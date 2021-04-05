import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor() { }

  createDb(){
    return{
      heroes:[
        {id:1, name: "Luffy", lifeForce:100},
        {id:2, name: "Zoro", lifeForce:100},
    ],
    }
  }
}
