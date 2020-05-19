import { StocksService, StockInterface } from './services/stocks.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: Array<StockInterface>;

  constructor(service: StocksService) {
    service.load(['AAPL']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }



}
