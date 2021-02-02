import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/User.model';
import { API_URL, USERS_API } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Promise<UserModel> {
    return this.http.get<UserModel>(`${API_URL}/${USERS_API}`).toPromise();
  }
  getUserById(id: number): Promise<UserModel> {
    return this.http.get<UserModel>(`${API_URL}/${USERS_API}/${id}`).toPromise();
  }
  postUser(user: UserModel): Promise<UserModel> {
    return this.http.post<UserModel>(`${API_URL}/${USERS_API}`, user).toPromise();
  }
}
