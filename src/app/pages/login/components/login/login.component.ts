import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup = new FormGroup({})
  constructor(public formBuilder:FormBuilder) {
    this.loginForm = formBuilder.group({
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.loginForm)
  }
}
