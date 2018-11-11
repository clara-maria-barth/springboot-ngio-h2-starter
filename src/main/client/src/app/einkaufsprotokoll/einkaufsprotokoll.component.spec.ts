import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EinkaufsprotokollComponent } from './einkaufsprotokoll.component';

describe('EinkaufsprotokollComponent', () => {
  let component: EinkaufsprotokollComponent;
  let fixture: ComponentFixture<EinkaufsprotokollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinkaufsprotokollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EinkaufsprotokollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
