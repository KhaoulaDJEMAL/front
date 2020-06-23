import { Component, OnInit } from '@angular/core';
import { Beneficiaire } from '../models/beneficiaire';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BeneficiaireService } from '../service/beneficiaire.service';
import { EtatSocial } from '../models/etatSocial';

@Component({
  selector: 'app-creation-beneficiaire',
  templateUrl: './creation-beneficiaire.component.html',
  styleUrls: ['./creation-beneficiaire.component.css']
})
export class CreationBeneficiaireComponent implements OnInit {

  beneficiaire: Beneficiaire= new Beneficiaire;
  etatSocial: Observable<EtatSocial[]>;

  beneficiaires: Observable<Beneficiaire[]>;
   constructor(private router: Router,private beneficiaireService: BeneficiaireService) {
    }
   
   ngOnInit() {
     this.dispalyingData();
   }
 
   save() {
     let resp=this.beneficiaireService.createBeneficiaire(this.beneficiaire);
     resp.subscribe(  data => {
       console.log(data);
       },
     error => console.error());
   }
 
   onSubmit() {
     this.save();    
   }
   
   dispalyingData() {
    this.etatSocial = this.beneficiaireService.getEtatSocial();
  }
}
