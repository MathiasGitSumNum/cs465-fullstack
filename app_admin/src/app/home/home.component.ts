import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

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
}
