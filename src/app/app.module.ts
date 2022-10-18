import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NavItemComponent } from './components/nav/nav-item/nav-item.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { BarComponent } from './components/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavItemComponent,
    PayrollComponent,
    EmployeesComponent,
    HomeComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
