import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchMovieBottomSheetComponent } from './watch-movie-bottom-sheet.component';

describe('WatchMovieBottomSheetComponent', () => {
  let component: WatchMovieBottomSheetComponent;
  let fixture: ComponentFixture<WatchMovieBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchMovieBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchMovieBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
