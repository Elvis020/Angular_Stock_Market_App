import { ManageComponent } from './components/manage/manage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'manage', component: ManageComponent},
];
export const AppRoutes = RouterModule.forRoot(routes);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
