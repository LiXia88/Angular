import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {
  @Input() emoji ='$';
  quantity = 0;
  @Output() changed = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {console.log('Emoji' + this.emoji + 'initalized!');
  }

  increment(): void{
    //controller
    this.quantity++;
    this.changed.emit(1);
  }

  decrement(): void{
    this.quantity--;
    this.changed.emit(-1);
  }
}
