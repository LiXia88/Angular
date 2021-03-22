import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {fromEvent, of,} from 'rxjs';
import {tap, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {
  keys = '';
  @ViewChild('keyContainer', {static: true}) input: ElementRef;

  constructor() {
    const values = of(1, 2, 3);
    values.subscribe(value => console.log(value))
   }

  ngOnInit(): void {
    const logger = fromEvent(this.input.nativeElement,'keyup');
    logger.pipe(
      map((evt: KeyboardEvent) => evt.key.charCodeAt(0)),
      filter((code) => {
          return code >= 97 && code <= 105 ;
      }),
      tap((code:number)=>{
        this.keys += String.fromCharCode(code);
          //console.log(code);
          //this.keys += evt.key;
      })
    )
    .subscribe();
  }
}
