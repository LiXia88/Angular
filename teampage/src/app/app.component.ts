import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'teampage';
  roster = [
    { fname: 'Francine', lname: 'Miller' },
    { fname: 'Charlie', lname: 'Lee', dob: new Date(2000, 11, 7) },
    { fname: 'Edgar', lname: 'Evariste', dob: new Date(2003, 4, 29) },
    { fname: 'Danielle', lname: 'Franklin', hometown: 'St. Louis, MO' },
  ];
}
