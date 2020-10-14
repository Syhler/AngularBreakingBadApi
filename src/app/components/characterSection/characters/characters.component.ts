import {Component, OnInit} from '@angular/core';
import {Character} from '../../../models/Character';
import {CharactersService} from '../../../services/characters.service';
import {newArray} from '@angular/compiler/src/util';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[][];
  rows: number[] = [];
  columns: number[] = [];

  private columnLength = 3;

  constructor(private serviceCharacters: CharactersService) {
    this.characters = [];
  }

  ngOnInit(): void {
    this.serviceCharacters.getCharacters().subscribe(x => {
      this.createRowColumn(x);
    });
  }

  onSelect(value: string): void {
    if (value === 'All') {
      this.characters = [];
      this.serviceCharacters.getCharacters().subscribe(x => this.createRowColumn(x));
    } else if (value === 'BreakingBad') {
      this.characters = [];
      this.serviceCharacters.getCharacters().subscribe(x => this.createRowColumn(x.filter(char => char.category.includes("Breaking Bad"))));
    } else if (value === 'BetterCallSaul') {
      this.characters = [];
      this.serviceCharacters.getCharacters().subscribe(x => this.createRowColumn(x.filter(char => char.category.includes("Better Call Saul"))));
    }
  }

  private createRowColumn(characters: Character[]): void {
    let row = 0;
    let column = 0;
    this.characters[0] = [];
    characters.forEach((value, index) => {

      this.characters[row][column] = value;
      if (column < this.columnLength - 1) // minus 1 because of zero index
      {
        column++;
      } else {
        column = 0;
        row++;
        this.characters[row] = [];
      }

    });
  }
}
