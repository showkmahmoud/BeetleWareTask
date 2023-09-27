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
  providers: [MessageService]

})
export class LoginComponent implements OnInit {
loginForm:any = new FormGroup({});
currentLang: string = '';
  constructor(
    public formBuilder:FormBuilder,
    public translte: TranslateService,
    public translateService: LangService,
    public authService: AuthService,
    public messageService: MessageService,
    public router: Router

) {
    this.loginForm = formBuilder.group({
      email:['user123@gmail.com',[Validators.email,Validators.required]],
      password:['12345678',Validators.required]
    })
  }

  ngOnInit(): void {
    localStorage.setItem(AuthUser.authUser , '');
    localStorage.setItem(AuthUser.userType , '');
  }

  get formControls() {
    return this.loginForm.controls;
  }

  /**
   * on submit the login form
   * used to set the local storage with the email with "BeetleWare Auth User"
   * and call the loggei function fron the service
   */
  onSubmit(){
    if(  this.loginForm.value.password != '12345678'){
      this.messageService.add({ severity: 'error', summary: 'Login Failed', detail: 'Your email or password is incorrect' });
    }else{
      localStorage.setItem(AuthUser.authUser , this.loginForm.value.email);
      if(this.authService.loggedIn()){
        this.router.navigate(['/home']);
        this.messageService.add({ severity: 'success', summary: 'Login Success', detail: '' });
      }else{
        this.messageService.add({ severity: 'error', summary: 'Login Failed', detail: 'Your email or password is incorrect' });
      }
    }
  }
}
