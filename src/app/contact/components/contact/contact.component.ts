import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  showError(controlName: keyof typeof this.contactForm.controls) {
    const control = this.contactForm.get(controlName);
    return control?.invalid && (control?.touched || control?.dirty);
  }

  submit() {
    console.log(this.contactForm.valid);
  }

}
