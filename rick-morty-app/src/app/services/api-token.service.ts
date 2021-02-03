import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, TOKEN_API } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ApiTokenService {

  constructor(private http: HttpClient) {}

  generateToken(body: any): Promise<any> {
    return this.http.post<any>(`${API_URL}/${TOKEN_API}`, body).toPromise();
  }
}
