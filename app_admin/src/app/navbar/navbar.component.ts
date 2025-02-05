import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
selector: 'app-navbar',
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.css'],
imports: [CommonModule, RouterModule]
})
export class NavbarComponent implements OnInit {
constructor(
 private authenticationService: AuthenticationService
) { }
ngOnInit() { }
public isLoggedIn(): boolean {
    if (sessionStorage.getItem("isLoggedIn") == null){
        sessionStorage.setItem("isLoggedIn", "false");
        return false;
    }
    if (sessionStorage.getItem("isLoggedIn") == "false"){
        return false;
    }
    return true;
 }
public onLogout(): void {
    sessionStorage.setItem("isLoggedIn", "false");
    location.reload();
 }

 public removeRegistration(): any {
    sessionStorage.setItem("registered", "false");
}

} 