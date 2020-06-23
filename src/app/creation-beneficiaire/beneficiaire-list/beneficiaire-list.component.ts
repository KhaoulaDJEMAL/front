import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeneficiaireService } from 'src/app/service/beneficiaire.service';
import { Observable } from 'rxjs';
import { Beneficiaire } from 'src/app/models/beneficiaire';

@Component({
  selector: 'app-beneficiaire-list',
  templateUrl: './beneficiaire-list.component.html',
  styleUrls: ['./beneficiaire-list.component.css']
})
export class BeneficiaireListComponent implements OnInit {
  beneficiaires: Observable<Beneficiaire[]>;

  constructor(private router: Router,private beneficiaireService: BeneficiaireService) {
  }
 
 ngOnInit() {
   this.reloadData();
 }
  reloadData() {
    this.beneficiaires = this.beneficiaireService.getBeneficiaireList();
  }

  public deleteBeneficiaire(id:number){
    this.beneficiaireService.deleteBeneficiaire(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.error());
  }
}
