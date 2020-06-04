import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatBvComponent } from './candidat-bv.component';

describe('CandidatBvComponent', () => {
  let component: CandidatBvComponent;
  let fixture: ComponentFixture<CandidatBvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatBvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatBvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
