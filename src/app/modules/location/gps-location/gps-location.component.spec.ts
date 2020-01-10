import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsLocationComponent } from './gps-location.component';

describe('GpsLocationComponent', () => {
  let component: GpsLocationComponent;
  let fixture: ComponentFixture<GpsLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
