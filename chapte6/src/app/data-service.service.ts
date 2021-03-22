import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  createDb(){
    return{
      heroes:[],
    }
  }
}
