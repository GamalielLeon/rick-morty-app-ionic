import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, TOKEN_API } from '../constants/urls';
import { TokenModel } from '../models/Token.model';
import { LoginModel } from '../models/Login.model';

@Injectable({
  providedIn: 'root'
})
export class ApiTokenService {

  constructor(private http: HttpClient) {}
  generateToken(body: LoginModel): Promise<TokenModel> {
    return this.http.post<TokenModel>(`${API_URL}/${TOKEN_API}`, body).toPromise();
  }
}
