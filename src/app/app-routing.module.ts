import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component'; // Import the ContactUsComponent
import {DynamicAddressFormComponent} from './dynamic-address-form/dynamic-address-form.component'
const routes: Routes = [
  // Other routes
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'dynamic-address-form', component: DynamicAddressFormComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
