import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CandidatBvComponent } from './candidat-bv/candidat-bv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtapeDocumentComponent } from './candidat-bv/etape-document/etape-document.component';
import {Ng7BootstrapBreadcrumbModule} from 'ng7-bootstrap-breadcrumb';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepsComponent } from './steps/steps.component';
import { StepTemplateComponent } from './step-template/step-template.component';
import { FormPageComponent } from './form-page/form-page.component';
import { CompletePageComponent } from './complete-page/complete-page.component';
import { BreadcrumbComponent } from './commons/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidatBvComponent,
    EtapeDocumentComponent,
    StepsComponent,
    StepTemplateComponent,
    FormPageComponent,
    CompletePageComponent,
    BreadcrumbComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng7BootstrapBreadcrumbModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  exports: [],
  entryComponents: [],
  providers: [NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
