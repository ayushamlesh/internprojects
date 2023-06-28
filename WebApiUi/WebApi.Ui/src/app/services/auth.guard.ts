import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service"

@Injectable({
  providedIn: 'root'
})

export class authguard implements CanActivate{
  constructor(private auth: AuthService,private router:Router) {
    }
    canActivate():boolean {
      if(this.auth.isLogedIn()){
        return true;
      }
      else{
        this.router.navigate(['home/users/login'])
        alert(`Please Login`)
        return false;
        }
    }
  }