import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reunion } from '../models/reunion';


@Injectable({
    providedIn: 'root'
  })
  export class ReunionService {
  
    constructor(private http: HttpClient) { }
  
  
    createReunion(reunion: Reunion): Observable<Object> {
      return this.http.post("http://localhost:8080/api/create-reunion", reunion, {responseType:'text' as 'json'});
    }

    public getReunionList(): Observable<any> {
      return this.http.get("http://localhost:8080/api/reunions");
    }

    public deleteReunion(id): Observable<any>{
        return this.http.delete("http://localhost:8080/api/cancelReunion/"+id);
      }

      
    public getMembreList(): Observable<any> {
        return this.http.get("http://localhost:8080/api/getMembre");
      }
  
    public getMembreListById(id): Observable<any> {
        return this.http.get("http://localhost:8080/api/getMembreById/"+id);
      }
  }