import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Deaths} from '../models/Deaths';
import {DeathCount} from '../models/DeathCount';

@Injectable({
  providedIn: 'root'
})
export class DeathsService {

  url = "https://breakingbadapi.com/api/";
  deathCountApi = "death-count";
  deathsApi = "deaths";


  constructor(private http: HttpClient) { }

  getDeaths(): Observable<Deaths[]> {
    return this.http.get<Deaths[]>(this.url + this.deathsApi);
  }

  getDeathCounter(name: string): Observable<DeathCount[]> {
    return this.http.get<DeathCount[]>(this.url + this.deathCountApi + "?name=" + name);
  }
}
