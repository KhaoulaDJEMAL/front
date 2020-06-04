import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CreateService } from '../service/create.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  users: Observable<User[]>;
  fname :string;
  constructor(private createService: CreateService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

public deleteUser(id:number){
  this.createService.deleteUser(id)
  .subscribe(
    data => {
      console.log(data);
      this.reloadData();
    },
    error => console.error());
}

updateEmployee(id: number){
  this.router.navigate(['update',id]) ;
}

/* public findUserByFname(){
  let resp= this.createService.getUserByFname(this.fname);
  resp.subscribe((data)=> this.users =data);
} */

reloadData() {
    this.users = this.createService.getUsersList();
    console.log("alooo",this.users);
  }
}
