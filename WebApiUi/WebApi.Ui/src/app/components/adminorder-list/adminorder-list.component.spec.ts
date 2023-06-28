import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminorderListComponent } from './adminorder-list.component';

describe('AdminorderListComponent', () => {
  let component: AdminorderListComponent;
  let fixture: ComponentFixture<AdminorderListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminorderListComponent]
    });
    fixture = TestBed.createComponent(AdminorderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
