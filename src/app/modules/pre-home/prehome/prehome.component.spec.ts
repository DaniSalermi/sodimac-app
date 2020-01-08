import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrehomeComponent } from './prehome.component';

describe('PrehomeComponent', () => {
  let component: PrehomeComponent;
  let fixture: ComponentFixture<PrehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
