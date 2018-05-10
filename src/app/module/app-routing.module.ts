import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { EmployeDetailComponent } from '../pages/employe-detail/employe-detail.component';
import { AddEmployeeComponent } from '../pages/add-employee/add-employee.component';

const routes: Routes = [
  { path:'', redirectTo: 'dashboard', pathMatch: 'full' },
  { path:'dashboard', component: DashboardComponent },
  { path:'employee-detail/:id', component: EmployeDetailComponent },
  { path:'add-employee', component: AddEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
