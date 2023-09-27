import { Injectable } from '@angular/core';
import { users } from '../users data/users';
import { IUser } from '../interfaces/user.interface';
import { UserStatus } from '../enums/userStatus';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  /**
   * get the users data as array
  */
  getUsers(): IUser[]{
    return users.filter((user) => user.status == UserStatus.active);
  }
/**
 * used to adding a new user to the users data
 * @param user : IUser
 */
  addUser(user:IUser){
    const id = Math.floor(Math.random() * 100);
    user.id = id
    console.log(user);
    users.push(user)
  }

  /**
   *  used to update the selected user by the admin
   * @param user : IUser
   */

  updateUser(user:IUser){
    const userIndex = users.findIndex((item => item.id == user.id));
    console.log(user)
    console.log(users[userIndex])
    users.splice(userIndex,1,user)
    console.log(users)
  }

  /**
   * used to delete the selected user from list
   * @param id :number
   */
  deleteUser(id:number){
    const userIndex = users.findIndex((item => item.id == id));
    users[userIndex].status = UserStatus.softDeleted;
  }
}
