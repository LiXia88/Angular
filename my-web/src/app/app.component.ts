import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-web';
  total = 0;

  counterChanged(alpha:number): void{
    console.log(alpha);
    this.total += alpha;
}
}
