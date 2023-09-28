/**
 *
 * @Author Showk Mahmoud
 * @export
 * @class LoginComponent
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AuthUser } from 'src/app/shared/enums/authenticatedUser';
import {
  getAppLanguage,
  getCurrentLang,
} from 'src/app/shared/services/appLanguage';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LangService } from 'src/app/shared/services/lang.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  /* the login form */
  loginForm: any = new FormGroup({});
  /* used to store the current used language */
  currentLang: string = '';

  /**
   *
   * @param formBuilder : an instance of the `FormBuilder` class used for form creation.
   * @param translte : the translation service from the library
   * @param translateService
   * @param authService : the auth service whitch used in the loggin
   * @param messageService : to display the notification
   * @param router : used to route to another page
   */
  constructor(
    public formBuilder: FormBuilder,
    public translte: TranslateService,
    public translateService: LangService,
    public authService: AuthService,
    public messageService: MessageService,
    public router: Router
  ) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    getAppLanguage(this.translte, this.translateService);
    this.currentLang = getCurrentLang(this.translateService);
  }

  ngDoCheck(): void {
    this.currentLang = getCurrentLang(this.translateService);
  }

  // to get the loginform controls
  get formControls() {
    return this.loginForm.controls;
  }

  /**
   * on submit the login form
   * used to set the local storage with the email with "BeetleWare Auth User"
   * and call the loggei function fron the service
   */
  onSubmit() {
    if (this.loginForm.value.password != '12345678') {
      this.messageService.add({
        severity: 'error',
        summary:
          this.currentLang == 'en' ? 'Login Failed' : 'لم يم تسجيل الدخول',
        detail: 'يوجد خطا فى الايميل او كلمة المرور',
      });
    } else {
      localStorage.setItem(AuthUser.authUser, this.loginForm.value.email);
      if (this.authService.loggedIn()) {
        this.router.navigate(['/home']);
        this.messageService.add({
          severity: 'success',
          summary:
            this.currentLang == 'en'
              ? 'Login Success'
              : 'تم تسجيل الدخول بنجاح',
          detail: '',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary:
            this.currentLang == 'en' ? 'Login Failed' : 'لم يم تسجيل الدخول',
          detail: 'يوجد خطا فى الايميل او كلمة المرور',
        });
      }
    }
  }
}
