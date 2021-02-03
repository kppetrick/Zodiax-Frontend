import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router"
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from "./login/login.component";
import { AccountComponent } from './account/account.component';
import { GameComponent } from './game/game.component';
import { HistoryComponent } from './history/history.component';
import { HiscoresComponent } from './Hiscores/hiscores.component';
import { AccountService } from "./Services/account/account.service";
import { BoardComponent } from './board/board.component';
import { HexagonsComponent } from './hexagons/hexagons.component';

const appRoutes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
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
  },
  {
    path:'hiscores',
    component:HiscoresComponent
  }
]
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AccountComponent,
    GameComponent,
    HistoryComponent,
    LoginComponent,
    HiscoresComponent,
    BoardComponent,
    HexagonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpClient, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
