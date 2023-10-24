import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-address-form',
  templateUrl: './dynamic-address-form.component.html',
  styleUrls: ['./dynamic-address-form.component.css']
})
export class DynamicAddressFormComponent implements OnInit {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      addresses: this.fb.array([]),
    });
  }

  ngOnInit() {
    // Initialize the form with one address entry
    this.addAddress();
  }

  get addresses() {
    return this.addressForm.get('addresses') as FormArray;
  }

  addAddress() {
    const addressGroup = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
    });
    this.addresses.push(addressGroup);
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onSubmit() {
    // Handle form submission here, access the addressForm value
    console.log(this.addressForm.value);
  }
}
