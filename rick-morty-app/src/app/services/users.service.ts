import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/User.model';
import { API_URL, USERS_API } from '../constants/urls';
import { ShareTokenService } from './share-token.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private shareToken: ShareTokenService) { }

  getUsers(): Promise<UserModel> {
    const headers = this.shareToken.headers();
    return this.http.get<UserModel>(`${API_URL}/${USERS_API}`, {headers}).toPromise();
  }
  getUserById(id: number): Promise<UserModel> {
    const headers = this.shareToken.headers();
    return this.http.get<UserModel>(`${API_URL}/${USERS_API}/${id}`, {headers}).toPromise();
  }
  postUser(user: UserModel): Promise<UserModel> {
    const headers = this.shareToken.headers();
    return this.http.post<UserModel>(`${API_URL}/${USERS_API}`, user, {headers}).toPromise();
  }
}
