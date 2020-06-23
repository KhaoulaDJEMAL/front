import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { InscriptionComponent } from './inscription/inscription.component';
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


const routes: Routes = [  { path: 'users', component: CreateComponent },
{ path: 'register', component: InscriptionComponent },
{ path: 'candidatBv', component: CandidatBvComponent },
{ path: 'update/:id', component: UpdateComponent },
{ path: 'compte', component: CompteComponent },
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'createBeneficiaire', component: CreationBeneficiaireComponent },
{ path: 'beneficiaire', component: BeneficiaireListComponent },
{ path: 'reunions', component: ReunionListComponent },
{ path: 'createReunion', component: ReunionComponent },
{ path: 'createMembre', component: MembreComponent },
{ path: 'membre', component: MembreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
