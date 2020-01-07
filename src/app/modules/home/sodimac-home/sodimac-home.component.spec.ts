import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SodimacHomeComponent } from './sodimac-home.component';

describe('SodimacHomeComponent', () => {
  let component: SodimacHomeComponent;
  let fixture: ComponentFixture<SodimacHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SodimacHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SodimacHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
