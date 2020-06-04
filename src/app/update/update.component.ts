import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateService } from '../service/create.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  user: User;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: CreateService) { }

  ngOnInit() {
    this.user = new User;

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }


  updateEmployee() {
    this.userService.updateEmployee(this.id, this.user)
      .subscribe(  data => {
        console.log(data);
        this.gotoList();
      },
      error => console.error());
  }


  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/users']);
  }
}
