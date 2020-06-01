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

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    InscriptionComponent,
    UpdateComponent,
    CompteComponent,    
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
