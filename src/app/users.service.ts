import { Injectable, OnInit } from '@angular/core';
import { User, UserElement } from './model';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{

  users: User[] | undefined;
  userList: UserElement[] | undefined;

  constructor() {
    this.users = this.getUsers();
    console.log(this.users);
    this.userList = this.getUserList();
  }

  ngOnInit(): void {

  }

  getUsers(): User[] {
    return [
      {
      "id": "1",
      "username": "bazera",
      "firstName": "Giorgi",
      "lastName": "Bazerashvili",
      "aboutMe": "About Bazera"
      },
      {
        "id": "2",
        "username": "lchedia",
        "firstName": "Lika",
        "lastName": "Chedia",
        "aboutMe": "About lika"
        }
    ]
  }

  getUserDetails(id: string) {
    console.log(this.users)
    return this.users?.find((user) => user.id == id);
  }

  getUserList() {
    return [
      {
        "id": "1",
        "username": "bazera",
      },
      {
        "id": "2",
        "username": "lchedia",
      }
    ]
  }

}
