import { Injectable } from '@angular/core';
//imported it
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //for connecting with API add here url of register.
  private baseUrl:string ="https://localhost:5137/api/User/"

  constructor(private http:HttpClient,private router:Router) { }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj);
  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);

  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

  getUsers()
  {
    return this.http.get<any>(this.baseUrl);
  }

  //tokenstrorage and prevent routing
 //settoken
  storeToken(tokenvalue:string){
    localStorage.setItem('token',tokenvalue);
  }

  //gettoken
  getToken(){
    return localStorage.getItem('token');
  }

  isLogedIn():boolean{
    return !!localStorage.getItem('token');
  }




}
