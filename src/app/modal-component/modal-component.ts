import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReunionService } from '../service/reunion.service';
import { Observable } from 'rxjs';
import { Membre } from '../models/membre';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <div class="panel-body">
    <table class="table table-striped">
      <thead>
        <tr>
            <th>prenom</th>
            <th>nom </th>
            <th>dateNais</th> 
            <th>mobile </th>
            <th>email </th>
            <th>addresse</th>
            <th>cin </th>        
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let membre of membres | async">
          <td>{{membre.prenom}}</td>  
          <td>{{membre.nom}}</td>  
          <td>{{membre.dateNais}}</td>  
          <td>{{membre.mobile}}</td>  
          <td>{{membre.email}}</td>  
          <td>{{membre.addresse}}</td>  
          <td>{{membre.cin}}</td>  
        </tr>
      </tbody>
    </table>
  </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;
  membres: Observable<Membre[]>;
  idMembre:any;
  id: number;
  ngOnInit() {
  }

  constructor(public activeModal: NgbActiveModal, private reunionService: ReunionService) {}

   reloadDataMembre(id :number) {
    this.membres = this.reunionService.getMembreList();
    console.log("alooo", this.membres);
  } 
  
}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.html'
})

export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}

  open(id: number) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
