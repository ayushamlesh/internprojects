import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent {
  constructor(private userService: UsersService) { }

  isUserLoggedIn(): boolean {
    return this.userService.isUserLoggedIn();
  }
  isAdminLoggedIn(): boolean {
    return this.userService.isAdminLoggedIn();
  }

  getUsername(): string {
    return this.userService.getUsername();
  }

  logout(): void {
    this.userService.logout();
  }

}
