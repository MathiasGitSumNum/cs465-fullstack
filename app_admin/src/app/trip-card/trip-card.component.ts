import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  } 

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    localStorage.removeItem('tripName');
    localStorage.setItem('tripName', trip.name);
    localStorage.removeItem('tripLength');
    localStorage.setItem('tripLength', trip.length);
    localStorage.removeItem('tripStart');
    localStorage.setItem('tripStart', trip.start.toString());
    localStorage.removeItem('tripResort');
    localStorage.setItem('tripResort', trip.resort);
    localStorage.removeItem('tripPerPerson');
    localStorage.setItem('tripPerPerson', trip.perPerson);
    localStorage.removeItem('tripImage');
    localStorage.setItem('tripImage', trip.image);
    localStorage.removeItem('tripDescription');
    localStorage.setItem('tripDescription', trip.description);
    this.router.navigate(['edit-trip']);
  }

}
