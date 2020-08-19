import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../../models/Character';
import {HttpClient} from '@angular/common/http';
import {CharactersService} from '../../../services/characters.service';
import {DeathsService} from '../../../services/deaths.service';
import {Deaths} from '../../../models/Deaths';

@Component({
  selector: 'app-flip-card',
  templateUrl: './character-flip-card.component.html',
  styleUrls: ['./character-flip-card.component.css']
})
export class CharacterFlipCardComponent implements OnInit {

  @Input() character: Character;
  showCharacterFacts = true;
  showDeathFact = false;
  deathReason: Deaths = null;

  private deaths: Deaths[];

  constructor(private characterService: CharactersService, private deathService: DeathsService) {
  }

  ngOnInit(): void {
    this.deathService.getDeathCounter(this.character.name).subscribe(x => {
      this.character.deathCount = x[0].deathCount;
    });

    this.deathService.getDeaths().subscribe(x => {
      this.deaths = x;
    });
  }

  onDeathClick(): void {
    this.showDeathFact = true;
    this.showCharacterFacts = false;
    if (this.deaths !== undefined)
    {
      this.deathReason = this.deaths.find(x => x.death === this.character.name);
    }
  }

  onGoBackClick(): void {
    this.showDeathFact = false;
    this.showCharacterFacts = true;
    this.deathReason = null;
  }
}
