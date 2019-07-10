import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <div class="float-left">
      <div class="container-fluid">
        <form>
          <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control">
          </div>

          <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control">
          </div>

          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control">
          </div>

          <div>
            <label>Password</label>
            <input type="password" class="form-control">
          </div>

          <input type="submit" class="btn btn-primary" name="ADD">

        </form>
      </div>
    </div>
    <div class="float-right">
      <app-employee-detail></app-employee-detail>
    </div>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
