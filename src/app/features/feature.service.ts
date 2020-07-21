import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private userEndPoint = 'https://randomuser.me/'

  constructor(private http: HttpClient) { }

  // API call to get random users
  getRandomUsers(number: number) {
    return this.http.get(`${this.userEndPoint}/api/?results=${number}`);
  }
}
