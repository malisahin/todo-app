import { TestBed } from '@angular/core/testing';

import { TodoDetailService } from './todo-detail.service';

describe('TodoDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoDetailService = TestBed.get(TodoDetailService);
    expect(service).toBeTruthy();
  });
});
