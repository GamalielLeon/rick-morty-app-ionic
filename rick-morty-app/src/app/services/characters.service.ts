import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, CHARACTERS_API } from '../constants/urls';
import { ShareTokenService } from './share-token.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient, private shareToken: ShareTokenService) { }

  getCharacters(page: number): Observable <any>{
    const headers = this.shareToken.headers();
    return this.http.get(`${API_URL}/${CHARACTERS_API}?pageSize=10&page=${page}`, {headers});
  }
  getId(id: string): Observable <any>{
    const headers = this.shareToken.headers();
    return this.http.get(`${API_URL}/${CHARACTERS_API}/${id}`, {headers});
  }
}
