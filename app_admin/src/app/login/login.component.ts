import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Md5} from 'ts-md5';
import { Observable } from 'rxjs';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css'],
imports: [FormsModule, CommonModule]
})
export class LoginComponent implements OnInit {
public formError: string = '';
public credentials = {
 name: '',
 email: '',
 password: ''
};
constructor(
 private router: Router,
 private authenticationService: AuthenticationService
) { }
ngOnInit() {}
public onLoginSubmit(): void {
 this.formError = '';
 if (!this.credentials.email || !this.credentials.password) {
 this.formError = 'All fields are required, please try again';
 } else {
 this.doLogin();
 }
 }
private doLogin(): void {
    let email = base64HashString(this.credentials.email);
    let password = md5HashString(this.credentials.password);
    password = base64HashString(password);
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    this.authenticationService.login(formData).subscribe(res => {
        if (res.statusCode == 200){
            sessionStorage.setItem("isLoggedIn", "true");
            this.router.navigateByUrl('#');
        }
    });

 }
}

function base64HashString(text: string) {
    return btoa(text);
}

function md5HashString(text: string) {
    return Md5.hashStr(text);
}
