import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationBeneficiaireComponent } from './creation-beneficiaire.component';

describe('CreationBeneficiaireComponent', () => {
  let component: CreationBeneficiaireComponent;
  let fixture: ComponentFixture<CreationBeneficiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationBeneficiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationBeneficiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
