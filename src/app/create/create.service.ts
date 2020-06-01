import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  private baseUrl = 'http://localhost:8080/api/update';

  constructor( private http: HttpClient) { }




  createEmployee(user: Object): Observable<Object> {
    return this.http.post("http://localhost:8080/api/create-compte", user, {responseType:'text' as 'json'});
  }
  
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  public deleteUser(id): Observable<any>{
    return this.http.delete("http://localhost:8080/api/cancel/"+id);
  }

  public getUsersList(): Observable<any> {
    return this.http.get("http://localhost:8080/api/users");
  }



  public getUserByFname(fname){
    return this.http.get("http://localhost:8080/api/findUser/"+fname);
  }


  getEmployee(id: number): Observable<any> {
    return this.http.get("http://localhost:8080/api/getUser/"+id);
  }
 


}
