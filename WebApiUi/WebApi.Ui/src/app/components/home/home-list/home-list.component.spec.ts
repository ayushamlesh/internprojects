import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListComponent } from './home-list.component';

describe('HomeListComponent', () => {
  let component: HomeListComponent;
  let fixture: ComponentFixture<HomeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeListComponent]
    });
    fixture = TestBed.createComponent(HomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
