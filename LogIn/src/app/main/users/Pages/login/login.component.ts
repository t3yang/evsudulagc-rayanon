import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginPage: FormGroup;

  constructor(private fb: FormBuilder, private userService: ServicesService, private router: Router){
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
    const { username, password } = this.LoginPage.value;

    if(this.userService.validateLogin(username, password)){
      this.router.navigate(['/main/detail']);
    } else {
      console.log('error');
    }
  }
}