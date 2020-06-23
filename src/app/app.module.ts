import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { CompteComponent } from './compte/compte.component';
import { HomeComponent } from './compte/home/home.component';
import { LoginComponent } from './compte/login/login.component';
import { CandidatBvComponent } from './candidat-bv/candidat-bv.component';
import { CreationBeneficiaireComponent } from './creation-beneficiaire/creation-beneficiaire.component';
import { BeneficiaireListComponent } from './creation-beneficiaire/beneficiaire-list/beneficiaire-list.component';
import { ReunionComponent } from './reunion/reunion.component';
import { ReunionListComponent } from './reunion/reunion-list/reunion-list.component';
import { MembreComponent } from './membre/membre.component';
import { MembreListComponent } from './membre/membre-list/membre-list.component';
import { NgbdModalComponent, NgbdModalContent } from './modal-component/modal-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    InscriptionComponent,
    UpdateComponent,
    CompteComponent,    
    HomeComponent,
    LoginComponent,
    CandidatBvComponent,
    CreationBeneficiaireComponent,
    BeneficiaireListComponent,
    ReunionComponent,
    ReunionListComponent,
    MembreComponent,
    MembreListComponent,
    NgbdModalComponent, 
    NgbdModalContent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    FormsModule,
  ],
  exports: [NgbdModalComponent],
  entryComponents: [NgbdModalContent],
  providers: [],
  bootstrap: [AppComponent, NgbdModalComponent]
})
export class AppModule { }
