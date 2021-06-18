import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRestaurantComponent } from './app-restaurant.component';

describe('AppRestaurantComponent', () => {
  let component: AppRestaurantComponent;
  let fixture: ComponentFixture<AppRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
