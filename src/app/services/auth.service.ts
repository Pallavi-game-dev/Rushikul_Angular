import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient,
      private cookieService:CookieService
  ) { }

  getCurrentUser() {
   let userData = JSON.parse(this.cookieService.get('secret_data'));
    let roleType = userData['role'];
    userData['activeRole'] = roleType;

    return userData;
  }
  getAuthorizatioRole() {
    let getCurrentUser = this.getCurrentUser();
    return getCurrentUser.activeRole;
  }
  getToken(){
    let userData = JSON.parse(this.cookieService.get('rushikul-data'))
    return userData['access_token'];
  }

  checkIsLoggin(){
    if(this.cookieService.get('rushikul_data')){
      return true;
    }else{
       return false
    }
  }

  login(body:any){
    return this.http.post(`${this.baseUrl}api/auth/login`,body)
  }

  register(){

  }
}
