import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForgotModalComponent } from './form-forgot-modal.component';

describe('FormForgotModalComponent', () => {
  let component: FormForgotModalComponent;
  let fixture: ComponentFixture<FormForgotModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormForgotModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForgotModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
