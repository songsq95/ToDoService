import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';

describe('Router', () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: []
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();
  });

  it('should go to todos when navigate ""', fakeAsync(() => {
    // given
    // when
    router.navigate([''])
    tick(50)
    // then
    expect(location.path()).toEqual('/todos')

  }));

  it('should go to todos when navigate "todos"', fakeAsync(() => {
    // given
    // when
    router.navigate(['todos'])
    tick(50)
    // then
    expect(location.path()).toEqual('/todos')

  }));

  it('should go to create when navigate "todos/create"', fakeAsync(() => {
    // given
    // when
    router.navigate(['todos/create'])
    tick(50)
    // then
    expect(location.path()).toEqual('/todos/create')

  }));

  it('should go to update when navigate "todos/edit/1"', fakeAsync(() => {
    // given
    // when
    router.navigate(['todos/edit',1])
    tick(50)
    // then
    expect(location.path()).toEqual('/todos/edit/1')

  }));

  it('should go to show detail when navigate "todos/2"', fakeAsync(() => {
    // given
    // when
    router.navigate(['todos',2])
    tick(50)
    // then
    expect(location.path()).toEqual('/todos/2')

  }));
});
