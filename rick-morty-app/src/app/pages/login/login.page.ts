import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TABS } from 'src/app/constants/paths';
import { EMAIL_PATTERN, PASSWORD_LOGIN_PATTERN  } from 'src/app/constants/patterns';
import { ApiTokenService } from '../../services/api-token.service';
import { ShareTokenService } from '../../services/share-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiTokenService: ApiTokenService,
              private router: Router, private shareToken: ShareTokenService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
      password: ['', [Validators.required, Validators.pattern(PASSWORD_LOGIN_PATTERN)]],
    });
  }
  ngOnInit() { }

  /********** METHODS **********/
  onSubmitLogin(): void {
    this.getToken();
  }
  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.controls[fieldName];
    return field.invalid && field.touched;
  }
  private async getToken(): Promise<void> {
    try {
      const {token} = await this.apiTokenService.generateToken(this.loginForm.value);
      this.shareToken.setToken(token);
      this.router.navigateByUrl(TABS);
    } catch (error) { alert('Correo electrónico o contraseña incorrecta'); }
  }

  /********** GETTERS **********/
  /********** SETTERS **********/
}
