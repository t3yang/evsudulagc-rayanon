import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginPage: FormGroup;

  constructor(private fb: FormBuilder){
    this.LoginPage = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  get username(){
    return this.LoginPage.get('username');
  }
  get password(){
    return this.LoginPage.get('password');
  }

  onLogin(){
    console.log('success');
  }
}