import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { DepartmentsService } from './department-list/departments.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailComponent } from './employee-list/employee-detail/employee-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DepartmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }


