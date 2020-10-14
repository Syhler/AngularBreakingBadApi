import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Episode} from '../models/Episode';

@Injectable({
  providedIn: 'root'
})

export class EpisodesService {

  private url = "https://breakingbadapi.com/api/";
  private episodesApi = "episodes";
  private breakingBadEpisodes = "Breaking+Bad";
  private betterCallSaulEpisodes = "Better+Call+Saul";


  constructor(private http: HttpClient) { }

  getBreakingBadEpisodes(): Observable<Episode[]> {
    return this.http.get<Episode[]>(this.url + this.episodesApi + "?series=" + this.breakingBadEpisodes);
  }

  getBetterCallSaulEpisodes(): Observable<Episode[]> {
    return this.http.get<Episode[]>(this.url + this.episodesApi + "?series=" + this.betterCallSaulEpisodes);
  }
}
