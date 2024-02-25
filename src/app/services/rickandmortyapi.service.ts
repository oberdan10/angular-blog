import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyapiService {

  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}
  
  getPersons(page: Number): Observable<any> {
    const url = `${this.apiUrl}/character/?page=${page}`;
    return this.http.get(url);
  }

  getPerson(page: Number): Observable<any> {
    const url = `${this.apiUrl}/character/${page}`;
    return this.http.get(url);
  }
}