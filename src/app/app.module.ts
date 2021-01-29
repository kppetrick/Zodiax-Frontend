import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AccountComponent } from './account/account.component';
import { GameComponent } from './game/game.component';
import { HistoryComponent } from './history/history.component';
import {RouterModule, Routes} from "@angular/router"

const appRoutes: Routes = [
  {
    path:'account',
    component:AccountComponent
  },
  {
    path:'game',
    component:GameComponent
  },
  {
    path:'history',
    component:HistoryComponent
  }
]
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AccountComponent,
    GameComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
