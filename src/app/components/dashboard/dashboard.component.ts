import { StockInterface, StocksService } from './../../services/stocks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks: StockInterface[];
  symbols: string[];

  constructor(private service: StocksService) {
    this.symbols = service.get();
   }

  ngOnInit() {
    this.service.load(this.symbols).subscribe(stocks => this.stocks= stocks);
  }

}
