import { Component, OnInit } from '@angular/core';
import { AuthUser } from 'src/app/shared/enums/authenticatedUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userType:string=''
  uTypes = AuthUser;
  constructor() { }

  ngOnInit(): void {
    this.userType = String(localStorage.getItem(AuthUser.userType));
  }

}
