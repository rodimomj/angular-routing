import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from './departments.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <div class="container" style="padding-left:2em;">
    <div style="float: left; width: 200px;">
      <h3>{{ errorMsg }}</h3>
      <ul class="list-group">
        <li class="list-group-item" (click)="onSelect(department)" [class.selected]="selected(department)" *ngFor ="let department of departments">
           {{ department.name }}
        </li> 
      </ul>
    </div>
  </div>
    
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public departments = [];
  public selectedId;
  public errorMsg;

  constructor(private _departmentService: DepartmentsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this._departmentService.getDepartment()
      .subscribe(data => this.departments = data,
        error => this.errorMsg = error);

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(department) {
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], { relativeTo: this.route});
  }

  selected(department){
    return department.id === this.selectedId;
  }

}
