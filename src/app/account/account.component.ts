import { Component, OnInit } from '@angular/core';

export class Account{
  constructor(
    name:string,
    password:string,
    rating:number
  ) {}
}
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
account: Account = new Account("","",0)
  ngOnInit(): void {
  }

}
