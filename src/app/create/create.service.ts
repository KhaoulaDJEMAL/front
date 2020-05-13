import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private baseUrl = 'http://localhost:8080/api/update';

  constructor( private http: HttpClient) { }
  
  public getUsersList() {
    return this.http.get("http://localhost:8080/api/users");
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:8080/api/cancel/"+id);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  public getUserByFname(fname){
    return this.http.get("http://localhost:8080/api/findUser/"+fname);
  }


  getEmployee(id: number): Observable<any> {
    return this.http.get("http://localhost:8080/api/getUser/"+id);
  }

}
