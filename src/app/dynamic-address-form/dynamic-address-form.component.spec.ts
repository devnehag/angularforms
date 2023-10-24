import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAddressFormComponent } from './dynamic-address-form.component';

describe('DynamicAddressFormComponent', () => {
  let component: DynamicAddressFormComponent;
  let fixture: ComponentFixture<DynamicAddressFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicAddressFormComponent]
    });
    fixture = TestBed.createComponent(DynamicAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
