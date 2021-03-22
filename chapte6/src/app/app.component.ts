import { Component,} from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DataServiceService} from './data-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chapte6';

  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    this.title ='Something is coming! (${timestamp})';
  }
      // private onComplete() {
      // return new Promise((resolve, reject) => {
      // setInterval (resolve,2000);

      // });
  //  }
  constructor() {
    this.title$.subscribe(this.setTitle);
  //his.onComplete().then(this.setTitle);
}
}
