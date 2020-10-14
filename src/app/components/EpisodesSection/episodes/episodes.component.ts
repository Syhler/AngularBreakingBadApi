import {Component, OnInit} from '@angular/core';
import {Episode} from '../../../models/Episode';
import {EpisodesService} from '../../../services/episodes.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  seasons: Episode[][] = [];

  series = '';
  title: string;

  constructor(private episodeService: EpisodesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.series = params.series;
      let seriesObservable: Observable<Episode[]>;
      if (params.series === 'breakingBad') {
        seriesObservable = this.episodeService.getBreakingBadEpisodes();
        this.title = "Breaking bad episodes";
      } else if (params.series === "betterCallSaul") {
        seriesObservable = this.episodeService.getBetterCallSaulEpisodes();
        this.title = "Better Call Saul Episodes";
      }

      seriesObservable.subscribe(x => {
        const seasonOne = x.filter(epi => epi.season === '1');
        const seasonTwo = x.filter(epi => epi.season === '2');
        const seasonThree = x.filter(epi => epi.season === '3');
        const seasonFour = x.filter(epi => epi.season === '4');
        const seasonFive = x.filter(epi => epi.season === '5');


        this.seasons[0] = seasonOne;
        this.seasons[1] = seasonTwo;
        this.seasons[2] = seasonThree;
        this.seasons[3] = seasonFour;
        this.seasons[4] = seasonFive;
      });

    });


  }

}
