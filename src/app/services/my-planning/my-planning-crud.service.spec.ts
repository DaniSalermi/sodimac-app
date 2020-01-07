import { TestBed } from '@angular/core/testing';

import { MyPlanningCrudService } from './my-planning-crud.service';

describe('MyPlanningCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyPlanningCrudService = TestBed.get(MyPlanningCrudService);
    expect(service).toBeTruthy();
  });
});
