import { UsersService } from 'src/app/shared/services/users.service';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import {
  getAppLanguage,
  getCurrentLang,
} from 'src/app/shared/services/appLanguage';
import { LangService } from 'src/app/shared/services/lang.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddEditUserComponent } from '../add-edit-user/add-edit-user.component';

@Component({
  selector: 'app-admins-view',
  templateUrl: './admins-view.component.html',
  styleUrls: ['./admins-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminsViewComponent {
  @Input() users!: IUser[];
  @Output() userDeleted: EventEmitter<number> = new EventEmitter();
  @Output() userUpdated: EventEmitter<any> = new EventEmitter();
  @Output() userAdded: EventEmitter<IUser> = new EventEmitter();
  @ViewChild('dt') dt: Table | undefined;

  currentLang: string = '';
  filteredData: any[] = [];
  ref: DynamicDialogRef | undefined;

  constructor(
    private translateService: LangService,
    private translte: TranslateService,
    public messageService: MessageService,
    public usersService: UsersService,
    public dialogService: DialogService
  ) {}
  ngOnInit(): void {
    getAppLanguage(this.translte, this.translateService);
    this.currentLang = getCurrentLang(this.translateService);
  }
  ngDoCheck(): void {
    this.currentLang = getCurrentLang(this.translateService);
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  /**
   * to delete the selected user
   * @param id :number
   */
  onDeleteUser(id: number) {
    this.userDeleted.emit(id);
  }

  /**
   * open the dialog to update the selected user and emit the form value to the home page
   * to update the user
   * @param user :IUser
   */
  onUpdateUser(user: IUser) {
    this.ref = this.dialogService.open(AddEditUserComponent, {
      header: `Edit ${user.name}`,
      data: {
        user: user,
        status: 'update',
      },
      closable:true,
      dismissableMask:true,
      width:'40vw'
    });
    this.ref.onClose.subscribe((data) => {
      if(data){
        data.id = user.id
        this.userUpdated.emit(data);
      }else{
        this.userUpdated.emit(null);
      }
    });
  }

  /**
   * open the dialog to add a new user and emit the form value to the home page
   */
  onAddUser() {
    this.ref = this.dialogService.open(AddEditUserComponent, {
      header: `Add User`,
      data: {
        user: '',
        status: 'add',
      },
      closable:true,
      dismissableMask:true,
      width:'40vw'
    });
    this.ref.onClose.subscribe((user) => {
      this.userAdded.emit(user? user : null);
    });
  }
}
