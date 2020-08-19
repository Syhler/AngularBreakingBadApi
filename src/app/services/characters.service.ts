import {Injectable} from '@angular/core';
import {Character} from '../models/Character';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  url = "https://breakingbadapi.com/api/characters";

  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.url);
  }


}
