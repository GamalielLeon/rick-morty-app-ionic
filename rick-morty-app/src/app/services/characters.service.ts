import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  private apiURL = 'http://localhost:3000/api/';

  getAllCharacters(){
    return this.http.get(this.apiURL + "characters");
  }

  getCharacters():  Observable <any>{
    return this.http.get(this.apiURL + "characters?pageSize=5&page=1");
  }


}
 