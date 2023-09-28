import { UsersService } from 'src/app/shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthUser } from 'src/app/shared/enums/authenticatedUser';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService,DialogService],
})
export class HomeComponent implements OnInit {
  userType: string = '';
  uTypes = AuthUser;
  users: IUser[] = [];

  constructor(
    private route: ActivatedRoute,
    public messageService: MessageService,
    public usersService:UsersService
  ) {}
  ngOnInit(): void {
    this.userType = String(localStorage.getItem(AuthUser.userType));
    this.getUsers();
  }

  /**
   * to get the users data
   */
  getUsers() {
    this.route.data.subscribe((res: any) => {
      this.users = res.users.length > 0 ? res.users : [];
    });
  }
  onUserDeleted(id:number) {
    this.usersService.deleteUser(id);
    this.messageService.add({
      severity: 'success',
      summary: 'User Deleted Successfully',
      detail: '',
    });
    this.users = this.usersService.getUsers();
  }
  onUserUpdated(user:IUser) {
    if(user){
      this.usersService.updateUser(user);
      this.messageService.add({
        severity: 'success',
        summary: 'User Updated Successfully',
        detail: '',
      });
      this.users = this.usersService.getUsers();
    }
  }

  onUserAdded(user:IUser) {
    if(user){
    this.usersService.addUser(user);
    this.messageService.add({
      severity: 'success',
      summary: 'User Added Successfully',
      detail: '',
    });
    this.users = this.usersService.getUsers();
    }
  }
}
