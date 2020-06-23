import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaireService {


  constructor( private http: HttpClient) { }


  createBeneficiaire(beneficiaire: Object): Observable<Object> {
    return this.http.post("http://localhost:8080/api/create-beneficiaires", beneficiaire, {responseType:'text' as 'json'});
  }

  public getEtatSocial(): Observable<any> {
    return this.http.get("http://localhost:8080/api/etatSocial");
  }
  
  public getBeneficiaireList(): Observable<any> {
    return this.http.get("http://localhost:8080/api/beneficiaires");
  }
  public deleteBeneficiaire(id): Observable<any>{
    return this.http.delete("http://localhost:8080/api/cancelBeneficiaire/"+id);
  }

 /*  public getBeneficiaireList(): Observable<any> {
    return this.http.get("http://localhost:8080/api/beneficiaires");
  }

  getBeneficiaire(id: number): Observable<any> {
    return this.http.get("http://localhost:8080/api/getBeneficiaire/"+id);
  }  */
 
}
