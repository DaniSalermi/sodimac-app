import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalUbicationComponent } from './local-ubication.component';

describe('LocalUbicationComponent', () => {
  let component: LocalUbicationComponent;
  let fixture: ComponentFixture<LocalUbicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalUbicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalUbicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
