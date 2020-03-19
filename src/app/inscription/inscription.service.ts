import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) { }


  createEmployee(user: Object): Observable<Object> {
    return this.http.post("http://localhost:8080/api/create-compte", user, {responseType:'text' as 'json'});
  }
  
}
