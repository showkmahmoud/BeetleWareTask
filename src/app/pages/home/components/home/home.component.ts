import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthUser } from 'src/app/shared/enums/authenticatedUser';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userType:string=''
  uTypes = AuthUser;
  users: IUser[] = [];

  constructor(private route: ActivatedRoute,
    ){
  }
  ngOnInit(): void {
    this.userType = String(localStorage.getItem(AuthUser.userType));
    this.getUsers();
  }

  /**
   * to get the users data
   */
  getUsers(){
    this.route.data.subscribe((res: any) => {
      this.users = res.users.length > 0 ? res.users : [] ;
    });
  }
}
