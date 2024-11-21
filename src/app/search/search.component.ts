import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  date: Date;
  origin: string;
  destination: string;
  status: string;

  constructor(private router: Router) {}

  onSearch() {
    this.router.navigate(['/results'], { queryParams: { date: this.date, origin: this.origin, destination: this.destination, status: this.status } });
  }
}
