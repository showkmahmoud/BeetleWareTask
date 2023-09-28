import { getAppLanguage, getCurrentLang } from 'src/app/shared/services/appLanguage';
import { IUser } from './../../../../shared/interfaces/user.interface';
import { Component, Input, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { LangService } from 'src/app/shared/services/lang.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent {
  @Input() users: IUser[] = [];
  @ViewChild('dt') dt: Table | undefined;

  currentLang: string = '';
  filteredData: any[] = [];

  constructor(
    private translateService: LangService,
    private translte: TranslateService,

  ){

  }
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

}
