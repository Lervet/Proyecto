import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFacturaComponent } from './form-factura.component';

describe('FormFacuraComponent', () => {
  let component: FormFacturaComponent;
  let fixture: ComponentFixture<FormFacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFacturaComponent]
    });
    fixture = TestBed.createComponent(FormFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
