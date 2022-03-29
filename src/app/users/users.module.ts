import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

const ROUTS = [
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: '**', component: UserListComponent}
]

@NgModule({
  declarations: [    
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTS)
  ],
  exports: [RouterModule]
})
export class UsersModule { }
