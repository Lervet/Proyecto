import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGastosComponent } from './form-gastos.component';

describe('FormGastosComponent', () => {
  let component: FormGastosComponent;
  let fixture: ComponentFixture<FormGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormGastosComponent]
    });
    fixture = TestBed.createComponent(FormGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
