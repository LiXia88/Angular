import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  errorCode = 404;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    console.log('You want to go home, huh???');
    this.router.navigate(['/']);
  }

}
