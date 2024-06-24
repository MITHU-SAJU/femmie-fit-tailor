import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('slideIn', [
      state('void', style({ transform: 'translateX(-100%)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms', style({ transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('bounceIn', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('500ms cubic-bezier(.8, -0.6, 0.2, 1.5)', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
    ]),
  ],
})

export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

 // Component
onSubmit(): void {
  if (this.contactForm.valid) {
    // Simulate form submission
    console.log('Form submitted:', this.contactForm.value);

    // Reset the form
    this.contactForm.reset();
  }
}

  }
  
