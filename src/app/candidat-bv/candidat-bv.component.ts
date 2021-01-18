import { Component, Input, OnInit } from '@angular/core';
import { CandidatBv } from '../models/candidatBv';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatBvService } from '../service/candidatBv.service';
import { ZoneConsulaire } from '../models/zoneConsulaire';
import { Circonscription } from '../models/circonscription';
import { Adresse } from '../models/adresse';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { StepModel } from '../models/StepModel';
import { StepsService } from '../service/steps.service';
import { resolve } from 'url';

@Component({
  selector: 'app-candidat-bv',
  templateUrl: './candidat-bv.component.html',
  styleUrls: ['./candidat-bv.component.css']
})
export class CandidatBvComponent implements OnInit {
  candidatBv: CandidatBv;
  zoneConsulaire: Observable<ZoneConsulaire[]>;
  circonscription: Observable<Circonscription[]>;
  candidatBvs: Observable<CandidatBv[]>;
  adresse: Adresse= new Adresse;

  candidatsBv: Observable<CandidatBv[]>;
  id= 304;
  data :any ;
  @Input() step: StepModel;
  currentStep: Observable<StepModel>;

   constructor(private router: Router,private candidatBvService: CandidatBvService,
   private stepsService: StepsService, private route: ActivatedRoute) {
    }
   
   ngOnInit() {
     this.dispalyingData();
     this.circonscriptionList();
     this.currentStep = this.stepsService.getCurrentStep();
     console.log("ngoninit",this.id)

   }

   candidatBvForm = new FormGroup({
    cin: new FormControl(''),
    dateCin: new FormControl(''),
    lieuCin: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    dateNaissance: new FormControl(''),
    lieuNaissance: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    specialite: new FormControl(''),
    dateObtentionDiplome: new FormControl(''),
    profession: new FormControl(''),
    dateCandidature: new FormControl(''),
    zoneConsulaireId: new FormControl(''),
    circonscriptionId: new FormControl(''),
    fonctionId: new FormControl(''),
    niveauEtudeId: new FormControl(''),
    pjCandidatureBvId: new FormControl(''),
    sexe: new FormControl(''),
    adr: new FormGroup({
      rueNom: new FormControl(''),
      rueNumero: new FormControl(''),
      ville: new FormControl(''),
      codePostal: new FormControl('')
    })
  });


   save() {
     let resp=this.candidatBvService.createCandidatBv(this.candidatBvForm.value);
     resp.subscribe(  data => { this.candidatBv =data;
      console.log(data);
    //  this.setId(this.candidatBv.id);
    },
     error => console.error());
     this.step.isComplete = true;

     if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    } else {
      this.submit();
    }

   }   
/* 
   setId(idCandidat:number){
    this.id=idCandidat;
    console.log("kkkkk",this.id);
    return this.id;
   } */
  
   submit(): void {
    this.router.navigate(['/complete']);
  }

   gotoList() {
     this.router.navigate(['/users']);
   }
   
   dispalyingData() {
    this.zoneConsulaire = this.candidatBvService.getZoneConsulaireList();
  }

  circonscriptionList() {
    this.circonscription = this.candidatBvService.getCirconscriptionList();
  }

  DisplayingListCandidatBv() {
    let candidatBvs = this.candidatBvService.getCandidatBvsList();
    candidatBvs.subscribe(  data => {
      console.log(data);
      },
     error => console.error());
  }

  
  onCompleteStep() {
    this.step.isComplete = true;
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continue' : 'Finish';
  }
}
