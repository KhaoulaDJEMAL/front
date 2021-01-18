import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CandidatBvService } from '../../service/candidatBv.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { CandidatBvComponent } from '../candidat-bv.component';
import { CandidatBv } from 'src/app/models/candidatBv';
import { StepModel } from 'src/app/models/StepModel';

@Component({
  selector: 'app-etape-document',
  templateUrl: './etape-document.component.html',
  styleUrls: ['./etape-document.component.css']
})
export class EtapeDocumentComponent implements OnInit,AfterViewInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  @ViewChildren(CandidatBvComponent) candidat :CandidatBvComponent;
  @Input() child : CandidatBvComponent;
  @Input() step: StepModel;
  currentStep: Observable<StepModel>;
  fileInfos: Observable<any>;
  idCandidat : number;

   constructor(private router: Router,private candidatBvService: CandidatBvService) {
    }
   
    ngOnInit() {
      this.fileInfos = this.candidatBvService.getFiles();
    }

    ngAfterViewInit(){
      this.idCandidat = this.candidat.id;
      console.log("component here",this.child.id);


    }


    onCompleteStep() {
      this.step.isComplete = true;
    }
upload() {
  this.progress = 0;
  console.log("cildren here",this.child.id);
  this.currentFile = this.selectedFiles.item(0);
  this.candidatBvService.upload(this.currentFile,this.candidat.id).subscribe(
    event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.message = event.body.message;
        this.fileInfos = this.candidatBvService.getFiles();
      }
    },
    err => {
      this.progress = 0;
      this.message = 'Could not upload the file!';
      this.currentFile = undefined;
    });

  this.selectedFiles = undefined;
}

selectFile(event) {
  this.selectedFiles = event.target.files;
}
}
