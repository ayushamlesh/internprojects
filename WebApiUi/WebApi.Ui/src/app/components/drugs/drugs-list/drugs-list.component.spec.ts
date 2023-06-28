import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsListComponent } from './drugs-list.component';

describe('DrugsListComponent', () => {
  let component: DrugsListComponent;
  let fixture: ComponentFixture<DrugsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrugsListComponent]
    });
    fixture = TestBed.createComponent(DrugsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
