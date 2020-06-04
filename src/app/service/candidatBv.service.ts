import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CandidatBv } from '../models/candidatBv';


@Injectable({
    providedIn: 'root'
  })
  export class CandidatBvService {
  
    constructor(private http: HttpClient) { }
  
  
    createCandidatBv(candidatBv: CandidatBv): Observable<Object> {
      return this.http.post("http://localhost:8080/api/create-candidatBv", candidatBv, {responseType:'text' as 'json'});
    }
    
  }