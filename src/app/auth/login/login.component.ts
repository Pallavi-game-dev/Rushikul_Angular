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
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userId:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]]
    })


  }
  submit(){

  }

}
