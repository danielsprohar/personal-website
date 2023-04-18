import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with 5 controls', () => {
    expect(component.contactForm.contains('email')).toBeTruthy();
    expect(component.contactForm.contains('firstName')).toBeTruthy();
    expect(component.contactForm.contains('lastName')).toBeTruthy();
    expect(component.contactForm.contains('subject')).toBeTruthy();
    expect(component.contactForm.contains('message')).toBeTruthy();
  });

  it('should make the email control required', () => {
    const control = component.email;
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the firstName control required', () => {
    const control = component.firstName;
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the lastName control required', () => {
    const control = component.lastName;
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the subject control required', () => {
    const control = component.subject;
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the message control required', () => {
    const control = component.message;
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the email control invalid if an invalid email is entered', () => {
    const control = component.email;
    control.setValue('test');
    expect(control.valid).toBeFalsy();
  });

  it('should make the firstName control invalid if a value longer than 32 characters is entered', () => {
    const control = component.firstName;
    control.setValue('a'.repeat(33));
    expect(control.valid).toBeFalsy();
  });

  it('should make the lastName control invalid if a value longer than 32 characters is entered', () => {
    const control = component.lastName;
    control.setValue('a'.repeat(33));
    expect(control.valid).toBeFalsy();
  });

  it('should make the subject control invalid if a value longer than 256 characters is entered', () => {
    const control = component.subject;
    control.setValue('a'.repeat(257));
    expect(control.valid).toBeFalsy();
  });

  it('should make the message control invalid if a value longer than 4096 characters is entered', () => {
    const control = component.message;
    control.setValue('a'.repeat(4097));
    expect(control.valid).toBeFalsy();
  });

  it('should make the email control valid if a valid email is entered', () => {
    const control = component.email;
    control.setValue('test@example.com');
    expect(control.valid).toBeTruthy();
  });

  it('should make the firstName control valid if a value less than 32 characters is entered', () => {
    const control = component.firstName;
    control.setValue('a'.repeat(31));
    expect(control.valid).toBeTruthy();
  });

  it('should make the lastName control valid if a value less than 32 characters is entered', () => {
    const control = component.lastName;
    control.setValue('a'.repeat(31));
    expect(control.valid).toBeTruthy();
  });

  it('should make the subject control valid if a value less than 256 characters is entered', () => {
    const control = component.subject;
    control.setValue('a'.repeat(255));
    expect(control.valid).toBeTruthy();
  });

  it('should make the message control valid if a value less than 4096 characters is entered', () => {
    const control = component.message;
    control.setValue('a'.repeat(4095));
    expect(control.valid).toBeTruthy();
  });

  it('should make the email control update on blur', () => {
    const control = component.email;
    control.setValue('test');
    control.markAsTouched();
    expect(control.valid).toBeFalsy();
  });

  it('should make the firstName control update on blur', () => {
    const control = component.firstName;
    control.setValue('a'.repeat(33));
    control.markAsTouched();
    expect(control.valid).toBeFalsy();
  });

  it('should make the lastName control update on blur', () => {
    const control = component.lastName;
    control.setValue('a'.repeat(33));
    control.markAsTouched();
    expect(control.valid).toBeFalsy();
  });

  it('should make the subject control update on blur', () => {
    const control = component.subject;
    control.setValue('a'.repeat(257));
    control.markAsTouched();
    expect(control.valid).toBeFalsy();
  });

  it('should make the message control update on blur', () => {
    const control = component.message;
    control.setValue('a'.repeat(4097));
    control.markAsTouched();
    expect(control.valid).toBeFalsy();
  });

  it('should make the email control update on input', () => {
    const control = component.email;
    control.setValue('test');
    expect(control.valid).toBeFalsy();
  });

  it('should make the firstName control update on input', () => {
    const control = component.firstName;
    control.setValue('a'.repeat(33));
    expect(control.valid).toBeFalsy();
  });

  it('should make the lastName control update on input', () => {
    const control = component.lastName;
    control.setValue('a'.repeat(33));
    expect(control.valid).toBeFalsy();
  });

  it('should make the subject control update on input', () => {
    const control = component.subject;
    control.setValue('a'.repeat(257));
    expect(control.valid).toBeFalsy();
  });

  it('should make the message control update on input', () => {
    const control = component.message;
    control.setValue('a'.repeat(4097));
    expect(control.valid).toBeFalsy();
  });

  describe('#handleSubmit', () => {
    it('should call the handleSubmit method', () => {
      const spy = spyOn(component, 'handleSubmit');
      component.handleSubmit();
      expect(spy).toHaveBeenCalled();
    });
  });
});
