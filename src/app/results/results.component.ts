import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  displayedColumns: string[] = ['origin', 'destination', 'date', 'status', 'time'];
  results = [
    {origin: 'City A', destination: 'City B', date: new Date(), status: 'disponivel', time: '08:00'},
    {origin: 'City A', destination: 'City C', date: new Date(), status: 'reservado', time: '10:00'}
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const date = params['date'];
      const origin = params['origin'];
      const destination = params['destination'];
      const status = params['status'];
      // Simulação de consulta com base nos parâmetros recebidos
      console.log(`Buscando passagens de ${origin} para ${destination} na data ${date} com status ${status}`);
    });
  }
}
