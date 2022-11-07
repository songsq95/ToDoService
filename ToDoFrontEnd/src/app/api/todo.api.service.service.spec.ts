import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TodoApiServiceService } from './todo.api.service.service';

describe('TodoApiServiceService', () => {
  let service: TodoApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(TodoApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
