import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes/';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl,  {
      headers: new HttpHeaders({'Authorization': 'myAuthToken'})
    }).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl + id);
  }

  createHero(name: string): Observable<Hero> {
    const hero = { name, lifeForce: 99 };
    return this.http.post<Hero>(this.heroesUrl, hero);
  }

  editHero(id: number, hero: Hero): Observable<any> {
    console.log('editHero:', id, hero);
    return this.http.put(this.heroesUrl + id, hero);
  }

  deleteHero(id: number): Observable<any> {
    return this.http.delete(this.heroesUrl + id);
  }
}
