import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://localhost:8080/api';
  myHeaders = new HttpHeaders().set("Content-Type", "application/json");
  constructor(private http: HttpClient) { }

  createUsers(data) {
    return this.http.post(`${this.url}/users`, data, {headers: this.myHeaders})
  }
  getAuthentication(data) {
    return this.http.post(`${this.url}/authenticate`, data, {headers: this.myHeaders})
  }
}
