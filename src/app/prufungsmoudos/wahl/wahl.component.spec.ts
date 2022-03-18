import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WahlComponent } from './wahl.component';

describe('WahlComponent', () => {
  let component: WahlComponent;
  let fixture: ComponentFixture<WahlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WahlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
