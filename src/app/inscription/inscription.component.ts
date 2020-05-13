import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InscriptionService } from './inscription.service';
import { Observable } from 'rxjs';
import { User } from '../user';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  //employee: Observable<User[]>;
  //employee: User;

 user: User= new User;
 // user: Observable<User[]>;
  message: any;
  constructor(private userService: InscriptionService,private router: Router) { }
  ngOnInit() {
  }

  save() {
    let resp=this.userService.createEmployee(this.user);
    resp.subscribe((data) =>this.message=data );
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/users']);
  }

}
