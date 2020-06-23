import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reunion } from 'src/app/models/reunion';
import { ReunionService } from 'src/app/service/reunion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from 'src/app/modal-component/modal-component';
import { Membre } from 'src/app/models/membre';

@Component({
  selector: 'app-reunion-list',
  templateUrl: './reunion-list.component.html',
  styleUrls: ['./reunion-list.component.css']
})
export class ReunionListComponent implements OnInit {

  reunions: Observable<Reunion[]>;
  membres: Observable<Membre[]>;


  constructor(private router: Router,private reunionService: ReunionService, private modalService: NgbModal) {
  }
 
 ngOnInit() {
   this.reloadData();
   this.reloadDataMembre();
 }
  reloadData() {
    this.reunions = this.reunionService.getReunionList();
  }

  public deleteReunions(id:number){
    this.reunionService.deleteReunion(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.error());
  }

  open(id:number) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';

      this.reunionService.getMembreListById(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.error());
    
  }

  reloadDataMembre() {
    this.membres = this.reunionService.getMembreList();
  }
  
}
