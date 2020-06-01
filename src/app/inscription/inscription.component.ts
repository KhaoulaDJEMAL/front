import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InscriptionService } from './inscription.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../user';
import { CreateService } from '../create/create.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { CreateComponent } from '../create/create.component';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
 user: User= new User;
 @ViewChild(CreateComponent, {static: false}) createComponent: CreateComponent;
 users: Observable<User[]>;
 submitted = false;
  constructor(private router: Router,private createService: CreateService) {
   
   }
  
  ngOnInit() {
  }

  save() {
    let resp=this.createService.createEmployee(this.user);
    resp.subscribe(  data => {
      console.log(data);
      this.gotoList();
    },
    error => console.error());
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['/users']);
  }
  reloadData() {
    this.users = this.createService.getUsersList();
  }

}
