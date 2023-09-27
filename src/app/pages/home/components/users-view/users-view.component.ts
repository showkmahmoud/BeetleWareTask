import { IUser } from './../../../../shared/interfaces/user.interface';
import { UsersService } from './../../../../shared/services/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent {
  users: IUser[] = [];
  constructor(public usersService:UsersService){

  }
  ngOnInit(): void {
    this.getUsers();
}

/**
 * to get the users data
 */
getUsers(){
  this.users = this.usersService.getUsers()
}
}
