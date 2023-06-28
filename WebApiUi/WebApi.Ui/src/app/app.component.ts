import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebApi.Ui';
  constructor(private userService: UsersService) { }

  isUserLoggedIn(): boolean {
    //console.log(this.userService.isUserLoggedIn());
    return this.userService.isUserLoggedIn();
  }
  isAdminLoggedIn(): boolean {
    //console.log(this.userService.isAdminLoggedIn());
    return this.userService.isAdminLoggedIn();
  }

  getUsername(): string {
    return this.userService.getUsername();
  }

  logout(): void {
    this.userService.logout();
    
  }

  
}
