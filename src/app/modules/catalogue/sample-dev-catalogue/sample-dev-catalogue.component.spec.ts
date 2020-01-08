import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDevCatalogueComponent } from './sample-dev-catalogue.component';

describe('SampleDevCatalogueComponent', () => {
  let component: SampleDevCatalogueComponent;
  let fixture: ComponentFixture<SampleDevCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDevCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDevCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
