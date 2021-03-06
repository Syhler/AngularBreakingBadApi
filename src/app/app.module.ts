import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharactersComponent } from './components/characterSection/characters/characters.component';
import { EpisodesComponent } from './components/EpisodesSection/episodes/episodes.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CharacterFlipCardComponent } from './components/characterSection/character-flip-card/character-flip-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    EpisodesComponent,
    QuotesComponent,
    DashboardComponent,
    CharacterFlipCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
