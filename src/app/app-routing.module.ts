import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { InscriptionComponent } from './inscription/inscription.component';


const routes: Routes = [  { path: 'users', component: CreateComponent },
{ path: 'register', component: InscriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
