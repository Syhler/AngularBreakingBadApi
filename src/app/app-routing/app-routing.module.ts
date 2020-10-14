import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {CharactersComponent} from '../components/characterSection/characters/characters.component';
import {QuotesComponent} from '../components/quotes/quotes.component';
import {Episode} from '../models/Episode';
import {EpisodesComponent} from '../components/EpisodesSection/episodes/episodes.component';
import {DashboardComponent} from '../components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "characters",
    component: CharactersComponent
  },
  {
    path: "quotes",
    component: QuotesComponent
  },
  {
    path: "episodes/:series",
    component: EpisodesComponent,
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
