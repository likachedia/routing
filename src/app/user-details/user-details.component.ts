import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User | undefined;
  id: string | null = null;

  constructor(private userService: UsersService, private rout: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.rout)
    // this.rout.snapshot.queryParams[0];
    // this.userService.getUsers();
   this.id = this.rout.snapshot.paramMap.get('id');
   this.user = this.userService.getUserDetails(this.id!);
   console.log(this.user);
  }



}
