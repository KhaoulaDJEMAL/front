import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor( private http: HttpClient) { }
  
  public getUsersList() {
    return this.http.get("http://localhost:8080/api/users");
  }

  public deleteUser(id){
    return this.http.delete("http://localhost:8080/api/cancel/"+id);
  }

  public getUserByFname(fname){
    return this.http.get("http://localhost:8080/api/findUser/"+fname);
  }


}
