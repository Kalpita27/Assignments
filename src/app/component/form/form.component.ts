import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  // standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  contactForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      message: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
  }
}
