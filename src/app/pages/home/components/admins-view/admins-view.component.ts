import { UsersService } from 'src/app/shared/services/users.service';
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import {
  getAppLanguage,
  getCurrentLang,
} from 'src/app/shared/services/appLanguage';
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-admins-view',
  templateUrl: './admins-view.component.html',
  styleUrls: ['./admins-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminsViewComponent {
  @Input() users!: IUser[];
  @Output()userDeleted:EventEmitter<boolean> = new EventEmitter();
  @Output()userUpdated:EventEmitter<boolean> = new EventEmitter();
  @ViewChild('dt') dt: Table | undefined;

  currentLang: string = '';
  ticketStatus: any[] = [];
  filteredData: any[] = [];
  constructor(
    private translateService: LangService,
    private translte: TranslateService,
    public messageService: MessageService,
    public usersService: UsersService
  ) {}
  ngOnInit(): void {
    getAppLanguage(this.translte, this.translateService);
    this.currentLang = getCurrentLang(this.translateService);
  }
  ngDoCheck(): void {
    this.currentLang = getCurrentLang(this.translateService);
  }
  onStateChange(e: any) {
    let val = e.value;
    this.filteredData = [...val];
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  /**
   * to delete the selected user
   * @param id :number
   */
  onDeleteUser(id:number){
    this.usersService.deleteUser(id);
    this.userDeleted.emit(true);
  }

  /**
   * to update the selected user
   * @param user :IUser
   */
  onUpdateUser(user:IUser){
    this.usersService.updateUser(user);
    this.userDeleted.emit(true);

  }
}
