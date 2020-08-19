import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void
  {
    this.serviceCharacters.getCharacters().subscribe(x =>
    {
      let row = 0;
      let column = 0;
      this.characters[0] = [];
      x.forEach((value, index) => {

        this.characters[row][column] = value;
        if (column < this.columnLength - 1) // minus 1 because of zero index
        {
          column++;
        }
        else {
          column = 0;
          row++;
          this.characters[row] = [];
        }

      });
    });
  }

}
