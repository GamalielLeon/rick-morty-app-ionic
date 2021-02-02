import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL_PATTERN, NAME_PATTERN, PASSWORD_PATTERN, PHONE_PATTERN } from 'src/app/constants/patterns';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  private passwordsMatched: boolean = true;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(NAME_PATTERN)]],
      lastName: ['', [Validators.required, Validators.pattern(NAME_PATTERN)]],
      email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
      phone: ['', [Validators.required, Validators.pattern(PHONE_PATTERN)]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]],
      passwordConfirm: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]]
    });
  }
  ngOnInit() { }

  /********** METHODS **********/
  onSubmitRegister(): void {
    console.log('submit!');
  }
  checkPasswordConfirm(): void{
    const formControls = this.registerForm.controls;
    this.setPasswordsMatched(formControls.password.value === formControls.passwordConfirm.value);
  }
  isFieldInvalid(fieldName: string): boolean{
    const field = this.registerForm.controls[fieldName];
    return field.invalid && field.touched;
  }
  /********** GETTERS **********/
  getPasswordsMatched = (): boolean => this.passwordsMatched;
  /********** SETTERS **********/
  setPasswordsMatched(passwordsMatched: boolean): void { this.passwordsMatched = passwordsMatched; }
}
