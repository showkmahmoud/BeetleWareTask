import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-admins-view',
  templateUrl: './admins-view.component.html',
  styleUrls: ['./admins-view.component.scss']
})
export class AdminsViewComponent {
@Input() users!:IUser[];
ngOnInit(): void {
}
}
