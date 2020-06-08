import { Component, OnInit } from '@angular/core';
import { CandidatBv } from '../models/candidatBv';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CandidatBvService } from '../service/candidatBv.service';
import { ZoneConsulaire } from '../models/zoneConsulaire';

@Component({
  selector: 'app-candidat-bv',
  templateUrl: './candidat-bv.component.html',
  styleUrls: ['./candidat-bv.component.css']
})
export class CandidatBvComponent implements OnInit {
  candidatBv: CandidatBv= new CandidatBv;
  zoneConsulaire: Observable<ZoneConsulaire[]>;

  candidatsBv: Observable<CandidatBv[]>;
   constructor(private router: Router,private candidatBvService: CandidatBvService) {
    }
   
   ngOnInit() {
     this.dispalyingData();
   }
 
   save() {
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
   

   dispalyingData() {
    this.zoneConsulaire = this.candidatBvService.getCandidatBvList();
    console.log("alooo",this.zoneConsulaire);
  }


}
