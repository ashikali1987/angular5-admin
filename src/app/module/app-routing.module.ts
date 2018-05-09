import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { EmployeDetailComponent } from '../pages/employe-detail/employe-detail.component';

const routes: Routes = [
  { path:'', redirectTo: 'dashboard', pathMatch: 'full' },
  { path:'dashboard', component: DashboardComponent },
  { path:'employee-detail/:id', component: EmployeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
