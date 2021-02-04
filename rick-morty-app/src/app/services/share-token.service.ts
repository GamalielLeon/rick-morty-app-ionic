import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareTokenService {
  private token: string = '';

  constructor() { }

  headers = (): HttpHeaders => new HttpHeaders({Authorization: `Bearer ${this.getToken()}`, 'Content-Type': 'application/json'});
  getToken = (): string => this.token;
  setToken(token: string): void { this.token = token; }
}
