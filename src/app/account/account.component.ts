import { Component, OnInit } from '@angular/core';
import {AccountService} from "../Services/account/account.service";

export class Account{
  constructor(username:string, password:string, rating:number) {}
}
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  title = "Account Page";
  account = new Account("","",0);
constructor(service: AccountService) {
}
  ngOnInit(): void {
  }

}
