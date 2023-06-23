import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPublicidadComponent } from './form-publicidad.component';

describe('FormPublicidadComponent', () => {
  let component: FormPublicidadComponent;
  let fixture: ComponentFixture<FormPublicidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPublicidadComponent]
    });
    fixture = TestBed.createComponent(FormPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
