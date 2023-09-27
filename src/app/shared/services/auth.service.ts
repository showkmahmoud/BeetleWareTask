import { Injectable } from '@angular/core';
import { AuthUser } from '../enums/authenticatedUser';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    ) { }
  loggedIn(){
    // if the user is admin
    if(localStorage.getItem(AuthUser.authUser) == 'admin888@gmail.com'){
      localStorage.setItem(AuthUser.userType ,AuthUser.admin );
      return true
    // if the user is basic user
    }else if(localStorage.getItem(AuthUser.authUser) == 'user123@gmail.com'){
      localStorage.setItem(AuthUser.userType ,AuthUser.user );
      return true
    }
    // if the user not Authenticated
    else{
      return false
    }
  }
}
