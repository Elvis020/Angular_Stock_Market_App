import { StocksService } from './services/stocks.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';




import { AppRoutingModule, AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { HttpClientModule } from '@angular/common/http';
import { ManageComponent } from './components/manage/manage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ManageComponent,
    DashboardComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
