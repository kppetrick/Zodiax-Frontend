import {Component, OnInit} from '@angular/core';
import {AccountService} from "../Services/account/account.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  title = "History Page"


  constructor() {}

  ngOnInit(): void {

  }

}

export class Account {
}
