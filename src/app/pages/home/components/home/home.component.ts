import { UsersService } from 'src/app/shared/services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthUser } from 'src/app/shared/enums/authenticatedUser';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { DialogService } from 'primeng/dynamicdialog';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from 'src/app/shared/services/lang.service';
import { getAppLanguage, getCurrentLang } from 'src/app/shared/services/appLanguage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService, DialogService],
})
export class HomeComponent implements OnInit {
  userType: string = '';
  uTypes = AuthUser;
  users: IUser[] = [];
  currentLang:string=''
  constructor(
    private route: ActivatedRoute,
    public messageService: MessageService,
    public usersService: UsersService,
    public translte: TranslateService,
    public translateService: LangService,

  ) {}
  ngOnInit(): void {
    this.userType = String(localStorage.getItem(AuthUser.userType));
    this.getUsers();
    getAppLanguage(this.translte, this.translateService);
    this.currentLang = getCurrentLang(this.translateService);

  }

  ngDoCheck(): void {
    this.currentLang = getCurrentLang(this.translateService);
  }

  /**
   * to get the users data
   */
  getUsers() {
    this.route.data.subscribe((res: any) => {
      this.users = res.users.length > 0 ? res.users : [];
    });
  }
  /**
   * delete user via the usersService
   * emits the notification
   * updates the usres data to display it
   * @param id
   */
  onUserDeleted(id: number) {
    this.usersService.deleteUser(id);
    this.messageService.add({
      severity: 'success',
      summary:  this.currentLang == 'en'?'User Deleted Successfully':'تم مسح المستخدم بنجاح',
      detail: '',
    });
    this.users = this.usersService.getUsers();
  }

  /**
   * update the user via the usersService
   * emits the notification
   * updates the usres data to display it
   * @param user
   */
  onUserUpdated(user: IUser) {
    if (user) {
      this.usersService.updateUser(user);
      this.messageService.add({
        severity: 'success',
        summary:  this.currentLang == 'en'?  'User Updated Successfully':'تم التعديل بنجاح',
        detail: '',
      });
      this.users = this.usersService.getUsers();
    } else {
      this.messageService.add({
        severity: 'error',
        summary:  this.currentLang == 'en'?  'Updated Failed':'لم يتم التعديل',
        detail: '',
      });
    }
  }

    /**
   * adding a new user via the usersService
   * emits the notification
   * updates the usres data to display it
   * @param user
   */
  onUserAdded(user: IUser) {
    if (user) {
      this.usersService.addUser(user);
      this.messageService.add({
        severity: 'success',
        summary:  this.currentLang == 'en'?  'User Added Successfully': 'تم اضافة مستخدم',
        detail: '',
      });
      this.users = this.usersService.getUsers();
    } else {
      this.messageService.add({
        severity: 'error',
        summary:  this.currentLang == 'en'?  'Adding New User Failed': 'لم يتم الاضافة',
        detail: '',
      });
    }
  }
}
