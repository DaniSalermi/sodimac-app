import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductToListComponent } from './product-to-list.component';

describe('ProductToListComponent', () => {
  let component: ProductToListComponent;
  let fixture: ComponentFixture<ProductToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
