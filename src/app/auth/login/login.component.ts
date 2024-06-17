import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userID:any;
  password:any;
  loginForm! :FormGroup;
  constructor(
    private fb:FormBuilder,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userId:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]]
    })


  }
  onLogin(){
    if(this.loginForm.valid){
      let body = {
        "user":this.loginForm.controls['userId'].value,
        "password":this.loginForm.controls['password'].value,
      }
      this.authService.login(body).subscribe((res)=>{
        if(res){
          console.log(res);

        }
      })
    }


  }

}
