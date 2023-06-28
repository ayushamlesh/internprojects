import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDrugComponent } from './display-drug.component';

describe('DisplayDrugComponent', () => {
  let component: DisplayDrugComponent;
  let fixture: ComponentFixture<DisplayDrugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayDrugComponent]
    });
    fixture = TestBed.createComponent(DisplayDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
