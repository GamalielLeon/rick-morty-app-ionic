import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, EPISODES_API } from '../constants/urls';
import { ShareTokenService } from './share-token.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http: HttpClient, private shareToken: ShareTokenService) { }

  getId(id: number): Observable <any>{
    const headers = this.shareToken.headers();
    return this.http.get(`${API_URL}/${EPISODES_API}/${id}`, {headers});
  }
}
