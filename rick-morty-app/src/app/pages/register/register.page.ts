import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL_PATTERN, NAME_PATTERN, PASSWORD_PATTERN, PHONE_PATTERN } from 'src/app/constants/patterns';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from '../../models/User.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  private passwordsMatched: boolean = true;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
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
  async onSubmitRegister(): Promise<void> {
    const userData: UserModel = {...this.registerForm.value};
    const userPosted: UserModel = await this.usersService.postUser(userData);
    console.log(userPosted);
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
