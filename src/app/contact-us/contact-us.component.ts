import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  formHasBeenSubmitted = false;
  contactDetails = {
    name: "",
    email: "",
    message: ""
  };
  onSubmit(formObj: NgForm) {
    this.formHasBeenSubmitted = true;
    // Set Local "contactDetails" object to the values on the form inputs
    this.contactDetails.name = formObj.value.name;
    this.contactDetails.email = formObj.value.email;
    this.contactDetails.message = formObj.value.message;

    // Reset the form
    formObj.reset();
    console.log(formObj.value);
  }
}
