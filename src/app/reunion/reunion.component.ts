import { Component, OnInit } from '@angular/core';
import { Reunion } from '../models/reunion';
import { Router } from '@angular/router';
import { ReunionService } from '../service/reunion.service';

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})
export class ReunionComponent implements OnInit {

  reunion: Reunion= new Reunion;

   constructor(private router: Router,private reunionService: ReunionService) {
    }
   
   ngOnInit() {
   }
 
   save() {
     let resp=this.reunionService.createReunion(this.reunion);
     resp.subscribe(  data => {
       console.log(data);
       },
     error => console.error());
   }
 
   onSubmit() {
     this.save();    
   }

}
