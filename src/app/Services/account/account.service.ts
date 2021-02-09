import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(private http: HttpClient) { }
  // @ts-ignore
  public getAllAccounts(url) {
    return this.http.get<Account[]>(url)
  }
  getAccount(){
  }
  getAllRatedGreater() {
  }
  getAllRatedBelow(){
  }
  createAccount(){
  }
  updateAccount(){
  }
  deleteAccount(){
  }
}
