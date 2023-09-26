import { Injectable } from '@angular/core';
import { AuthUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn(){
    const user:AuthUser = {
      email:'admin888@gmail.com',
      password:'1234567'
    }
    if(user.email == 'admin888@gmail.com' && user.password == '12345678'){
      return true
    }else{
      return false
    }
  }
}
