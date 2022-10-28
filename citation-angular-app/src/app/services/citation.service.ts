import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citation } from "../citation";

@Injectable({
  providedIn: 'root'
})
export class CitationService {
  private apiUrl = 'http://localhost:5000/data'
  constructor(private http: HttpClient) { }

  getCitations(): Observable<Citation[]> {
    return this.http.get<Citation[]>(this.apiUrl);
  }
}
