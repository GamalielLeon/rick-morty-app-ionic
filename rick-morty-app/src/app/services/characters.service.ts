import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  private apiURL = 'http://localhost:3000/api/';

  getCharacters(page): Observable <any>{
    return this.http.get(this.apiURL + 'characters?pageSize=10&page=' + page);
  }

  getId(id): Observable <any>{
    return this.http.get(this.apiURL + 'characters/' + id);
  }
}
