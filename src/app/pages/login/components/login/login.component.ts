import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {
  getAppLanguage,
  getCurrentLang,
} from 'src/app/shared/services/appLanguage';
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:any = new FormGroup({});
currentLang: string = '';

  constructor(public formBuilder:FormBuilder,
    private translte: TranslateService,
    private translateService: LangService,
) {
    this.loginForm = formBuilder.group({
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get formControls() {
    return this.loginForm.controls;
  }
  onSubmit(){
    console.log(this.loginForm.value)
  }
}
