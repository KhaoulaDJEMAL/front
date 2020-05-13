import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  users: any;
  fname :string;
  constructor(private createService: CreateService, private router: Router) { }

public deleteUser(id:number){
  let resp= this.createService.deleteUser(id);
  resp.subscribe((data)=> this.users =data);
}
updateEmployee(id: number){
  this.router.navigate(['update',id]) ;
}

public findUserByFname(){
  let resp= this.createService.getUserByFname(this.fname);
  resp.subscribe((data)=> this.users =data);
}


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.createService.getUsersList();
  }
 


}
