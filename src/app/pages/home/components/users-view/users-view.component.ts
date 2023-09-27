import { IUser } from './../../../../shared/interfaces/user.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent {
  @Input() users: IUser[] = [];
  constructor(){

  }
  ngOnInit(): void {
}

}
