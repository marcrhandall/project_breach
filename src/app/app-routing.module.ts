import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { PayrollComponent } from './components/payroll/payroll.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'payroll', component: PayrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
