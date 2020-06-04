import { Component, OnInit } from '@angular/core';
import { CandidatBv } from '../models/candidatBv';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CandidatBvService } from '../service/candidatBv.service';

@Component({
  selector: 'app-candidat-bv',
  templateUrl: './candidat-bv.component.html',
  styleUrls: ['./candidat-bv.component.css']
})
export class CandidatBvComponent implements OnInit {
  candidatBv: CandidatBv= new CandidatBv;
  
  candidatsBv: Observable<CandidatBv[]>;
   constructor(private router: Router,private candidatBvService: CandidatBvService) {
    }
   
   ngOnInit() {
   }
 
   save() {
     console.log("alooooo",this.candidatBv);
     let resp=this.candidatBvService.createCandidatBv(this.candidatBv);
     resp.subscribe(  data => {
       console.log(data);
       },
     error => console.error());
   }
 
   onSubmit() {
     this.save();    
   }
   gotoList() {
     this.router.navigate(['/users']);
   }

}
