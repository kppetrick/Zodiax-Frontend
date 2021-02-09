import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "../Services/account/account.service";
import {AccountComponent} from "../account/account.component";

@Component({
  selector: 'app-hiscores',
  templateUrl: './hiscores.component.html',
  styleUrls: ['./hiscores.component.css']
})
export class HiscoresComponent implements OnInit {
  title = "Hiscores Page";
  account: Account[]
  url = "https://localhost:8080/hiscore"
  constructor(public router: Router, public accountService: AccountService) { }

  ngOnInit(): void {
    this.getAllAccounts()
  }
  getAllAccounts() {
    this.accountService.getAllAccounts(this.url).subscribe(
      response => {
        console.log(response);
        // @ts-ignore
        this._accounts = response;
      })
  }

}
