import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePickerComponent } from './movie-picker.component';

describe('MoviePickerComponent', () => {
  let component: MoviePickerComponent;
  let fixture: ComponentFixture<MoviePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
