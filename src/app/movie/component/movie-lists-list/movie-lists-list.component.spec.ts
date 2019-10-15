import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListsListComponent } from './movie-lists-list.component';

describe('MovieListsListComponent', () => {
  let component: MovieListsListComponent;
  let fixture: ComponentFixture<MovieListsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
