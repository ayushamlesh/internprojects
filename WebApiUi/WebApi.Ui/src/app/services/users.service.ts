import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.model';
import { Drug } from '../models/drug.model';
import jwt_decode from 'jwt-decode';
import { SignUp } from '../models/signup.model';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseApiUrl: string = environment.baseApiUrl;
  private tokenKey: string = 'auth_token';

  constructor(private http: HttpClient,private router: Router) { }
  userLogin(userLoginRequest: Login): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/User/login',userLoginRequest);
  }
  userSignUp(userSignUpRequest: SignUp): Observable<any>
  {
    return this.http.post(this.baseApiUrl + '/api/User/register', userSignUpRequest);
  }
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey,token);
  }
  getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }
  addDrug(drug: Drug): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/drugs',drug);
  }
  decodeToken(token: string): any {
    try {
      const decodedToken = jwt_decode(token);
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
  getUserRole() {
    const token = this.getToken();
    var decodedToken = this.decodeToken(token);
    var roleName = decodedToken.RoleName;
    return roleName;
  }
  isUserLoggedIn(): boolean {
    const token = this.getToken();
    var decodedToken;
    var roleName;
    if(token)
    {
      decodedToken = this.decodeToken(token);
      roleName = decodedToken.RoleName;
      if(roleName=="user")
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else
    {
      return false;
    }
  }
  isAdminLoggedIn(): boolean {
    const token = this.getToken();
    var decodedToken;
    var roleName;
    if(token)
    {
      decodedToken = this.decodeToken(token);
      roleName = decodedToken.RoleName;
      if(roleName=="admin")
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else
    {
      return false;
    }
  }

  getUsername(): string {
    const token = this.getToken();
    const decodedToken = this.decodeToken(token);
    const username = decodedToken.UserName;
    return username ? username : 'no user';
  }

  logout(): void {
    this.removeToken();
    this.router.navigate(['']);

  }
  
}
