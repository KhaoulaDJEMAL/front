import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatBvComponent } from './candidat-bv/candidat-bv.component';
import { EtapeDocumentComponent } from './candidat-bv/etape-document/etape-document.component';
import { BreadcrumbComponent } from './commons/breadcrumb/breadcrumb.component';
import { CompletePageComponent } from './complete-page/complete-page.component';
import { FormPageComponent } from './form-page/form-page.component';


const routes: Routes = [
  {
    path: 'form',
    component: FormPageComponent
  },
  {
    path: 'fil-ariane',
    component: BreadcrumbComponent
  },
  {
    path: 'complete',
    component: CompletePageComponent
  },
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  },
{ path: 'candidatBv', component: CandidatBvComponent },
{ path: 'etapeDocument', component: EtapeDocumentComponent},
{
  path: 'page1/:pageOneID',
  component: CandidatBvComponent,
  data: {
    title: 'page1',
    breadcrumb: [
      {
        label: 'Page1',
        url: ''
      }
    ]
  },
},
{
  path: 'page1/:pageOneID/page2/:pageTwoID',
  component: EtapeDocumentComponent,
  data: {
    title: 'page2',
    breadcrumb: [
      {
        label: 'page {{pageOneID}}',// pageOneID Parameter value will be add 
        url: '/page1/:pageOneID'
      },
      {
        label: 'page {{pageTwoID}}',// pageTwoID Parameter value will be add 
        url: ''
      }
    ]
  },
},
{
  path: 'page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID',
  component: EtapeDocumentComponent,
  data: {
    title: 'page3',
    breadcrumb: [
      {
        label: 'page1',
        url: '/page1/:pageOneID'
      },
      {
        label: '{{dynamicText}} page', // If "dynamicText" is not parameter , should be set value  using Ng7MatBreadcrumbService, More info please check the 5th point.
        url: 'page1/:pageOneID/page2/:pageTwoID'
      },
      {
        label: '{{customText}}', // If "customText" is not parameter , should be set value  using Ng7MatBreadcrumbService, More info please check the 5th point.
        url: ''
      }
    ]
  },
},
{
  path: '', pathMatch: 'full', redirectTo: '/page1/1'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
