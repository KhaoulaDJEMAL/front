import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent} from '@angular/common/http';
import { CandidatBv } from '../models/candidatBv';
import { Adresse } from '../models/adresse';


@Injectable({
    providedIn: 'root'
  })
  export class CandidatBvService {
  
    constructor(private http: HttpClient) { }
  
  
    createCandidatBv(candidatBv: CandidatBv): Observable<CandidatBv> {
      return this.http.post<CandidatBv>("http://localhost:8080/api/create-candidatBv", candidatBv);
    }
    public getCandidatBvsList(): Observable<any> {
      return this.http.get("http://localhost:8080/api/candidatBvs");
    }

    public getZoneConsulaireList(): Observable<any> {
      return this.http.get("http://localhost:8080/api/zoneConsulaire");
    }
    
    public getCirconscriptionList(): Observable<any> {
      return this.http.get("http://localhost:8080/api/circonscription");
    }

    createAdresse(adresse: Adresse): Observable<Object> {
      return this.http.post("http://localhost:8080/api/create-adresse", adresse, {responseType:'text' as 'json'});
    }

    upload(file: File, id :number): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();
  
      formData.append('file', file);
      formData.append('id', id.toString());

      const req = new HttpRequest('POST', `http://localhost:8080/api/upload`, formData, {
        reportProgress: true,
        responseType: 'json'
      });
  
      return this.http.request(req);
    }
  
    getFiles(): Observable<any> {
      return this.http.get(`http://localhost:8080/api/files`);
    }
  }