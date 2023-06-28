import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/models/signup.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  userSignUpRequest: SignUp = {
    UserName: '',
    UserEmail: '',
    Password: ''
  }
  isFormSubmitted = false;
  constructor(private userService: UsersService,private router: Router) { }
  isValidPasswordPattern(password: string): boolean {
    const regex = /^[a-zA-Z0-9@#$%^&+=]+$/;
    return regex.test(password);
  }
  
  signup() {
    this.isFormSubmitted=true;
    this.userService.userSignUp(this.userSignUpRequest)
    .subscribe({
      next: (response) => {
        alert("Registered Successfully");
        this.router.navigate(['home/users/login']);
      },
      error: (resp) => {
        console.log('Registering failed:',resp);
        alert("Registeration Failed" + resp);
        this.router.navigate(['signup']);
      }
    })
  }

}
