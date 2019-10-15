import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMovieResultComponent } from './selected-movie-result.component';

describe('SelectedMovieResultComponent', () => {
  let component: SelectedMovieResultComponent;
  let fixture: ComponentFixture<SelectedMovieResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedMovieResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMovieResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
