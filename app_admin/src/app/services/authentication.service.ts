import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { TripDataService } from '../services/trip-data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripDataService
  ) {}
  public getToken(): string {
    this.storage.getItem('travlr-token')
    return ("");
  }
  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }
  public login(user: FormData): Observable<any> {
    const url: string = 'http://localhost:8080/api/auth/login';
    console.log(url);
    console.log(user.get("email"));
    return this.http
    .post<any>(url, user , {headers: {skip: 'true'}}); 
  }
  public register(user: FormData): Observable<any> {
    const url: string = 'http://localhost:8080/api/auth/register';
    console.log(url);
    console.log(user.get("email"));
    return this.http
    .post<any>(url, user , {headers: {skip: 'true'}}); 
  }
  public logout(): void {
    this.storage.removeItem('travlr-token');
  }
  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }
  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, name } =
      JSON.parse(atob(token.split('.')[1]));
      return { email, name } as User;
    }
    return new User();
  }
}