import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBottonSheetComponent } from './login-botton-sheet.component';

describe('LoginBottonSheetComponent', () => {
  let component: LoginBottonSheetComponent;
  let fixture: ComponentFixture<LoginBottonSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBottonSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBottonSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
