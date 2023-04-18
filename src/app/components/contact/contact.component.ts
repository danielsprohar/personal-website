import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  readonly NAME_MAX_LENGTH = 32;
  readonly SUBJECT_MAX_LENGTH = 256;
  readonly MESSAGE_MAX_LENGTH = 4096;

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: this.fb.control('', {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      }),
      firstName: [
        '',
        [Validators.required, Validators.maxLength(this.NAME_MAX_LENGTH)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.maxLength(this.NAME_MAX_LENGTH)],
      ],
      subject: [
        '',
        [Validators.required, Validators.maxLength(this.SUBJECT_MAX_LENGTH)],
      ],
      message: [
        '',
        [Validators.required, Validators.maxLength(this.MESSAGE_MAX_LENGTH)],
      ],
    });
  }

  get email() {
    return this.contactForm.get('email') as FormControl;
  }

  get firstName() {
    return this.contactForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.contactForm.get('lastName') as FormControl;
  }

  get subject() {
    return this.contactForm.get('subject') as FormControl;
  }

  get message() {
    return this.contactForm.get('message') as FormControl;
  }

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'You must enter a value';
    }

    if (control.hasError('email')) {
      return 'Not a valid email';
    }

    if (control.hasError('maxlength')) {
      return `Exceeded maximum length of ${control?.errors?.['maxlength'].requiredLength}`;
    }

    return '';
  }

  handleSubmit() {
    if (this.contactForm.invalid) return;
    console.log(this.contactForm.value);
  }
}
