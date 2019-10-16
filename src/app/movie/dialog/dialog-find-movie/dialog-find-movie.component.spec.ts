import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFindMovieComponent } from './dialog-find-movie.component';

describe('DialogFindMovieComponent', () => {
  let component: DialogFindMovieComponent;
  let fixture: ComponentFixture<DialogFindMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFindMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFindMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
