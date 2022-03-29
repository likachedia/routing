import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserElement } from '../model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  // userList: UserElement[] | undefined
  get userList() {
    return this.userService.getUserList()
  }
  constructor(private userService: UsersService, 
    private rout: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    
  }

  goToDetails(user: UserElement) {
    console.log('clicked')
    const userId = user? user.id : null;
    this.router.navigate(['user-details', {id: userId}])
  }

}
