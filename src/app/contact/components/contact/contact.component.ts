import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { createDomainValidator } from '../validators/domainValidator';

const CustomValidators = {
  domain: createDomainValidator(['gmail.com', 'hotmail.com', 'yahoo.com'])
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email, CustomValidators.domain]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  hasError(controlName: keyof typeof this.contactForm.controls) {
    const control = this.contactForm.get(controlName);
    return control?.invalid && (control?.touched || control?.dirty);
  }

  submit() {
    console.log(this.contactForm.valid);
  }

}
