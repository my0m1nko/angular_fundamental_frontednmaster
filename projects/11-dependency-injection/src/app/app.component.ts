import { Component, OnInit, inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from './data';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[UserInfoComponent],
  template: `
  <h1>User Listing</h1>
  @for (user of userDatas; track user.id) {
    <app-user-info [user]="user"/>
  }
  `,
})
export class AppComponent implements OnInit{
  userService = inject(UserService);
  userDatas: User[] =[];
  constructor(private userData : UserService) {

  }
  async ngOnInit() {
    await this.userService.getUserData().then(
      data =>{
        this.userDatas = data;
      }
    )
  }

}
