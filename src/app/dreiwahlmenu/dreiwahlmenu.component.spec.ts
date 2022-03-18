import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreiwahlmenuComponent } from './dreiwahlmenu.component';

describe('DreiwahlmenuComponent', () => {
  let component: DreiwahlmenuComponent;
  let fixture: ComponentFixture<DreiwahlmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreiwahlmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DreiwahlmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
