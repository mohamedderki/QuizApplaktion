import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WahlmenuComponent } from './wahlmenu.component';

describe('WahlmenuComponent', () => {
  let component: WahlmenuComponent;
  let fixture: ComponentFixture<WahlmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WahlmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WahlmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
