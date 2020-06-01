import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UpdateComponent } from './update/update.component';
import { CompteComponent } from './compte/compte.component';
import { HomeComponent } from './compte/home/home.component';
import { LoginComponent } from './compte/login/login.component';


const routes: Routes = [  { path: 'users', component: CreateComponent },
{ path: 'register', component: InscriptionComponent },
{ path: 'update/:id', component: UpdateComponent },
{ path: 'compte', component: CompteComponent },
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
