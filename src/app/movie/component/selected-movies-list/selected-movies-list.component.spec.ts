import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMoviesListComponent } from './selected-movies-list.component';

describe('SelectedMoviesListComponent', () => {
  let component: SelectedMoviesListComponent;
  let fixture: ComponentFixture<SelectedMoviesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedMoviesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
