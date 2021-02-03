import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http: HttpClient) { }

  private apiURL = 'http://localhost:3000/api/';

  
  getId(id): Observable <any>{
    return this.http.get(this.apiURL + 'episodes/' + id);
  }
}
