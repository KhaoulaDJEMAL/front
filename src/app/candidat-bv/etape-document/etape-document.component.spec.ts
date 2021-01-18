import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapeDocumentComponent } from './etape-document.component';

describe('EtapeDocumentComponent', () => {
  let component: EtapeDocumentComponent;
  let fixture: ComponentFixture<EtapeDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapeDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
