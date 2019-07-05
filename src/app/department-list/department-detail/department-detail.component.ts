import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../departments.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3 >You selected {{ departmentName }} with ID = {{ departmentId }} </h3>
    
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
    </p>
    <p>
    <button (click)="goBack()">Back</button>
    </p>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  public departmentName;
  public department = [];
  public dlength ; 
  public errorMsg;

  constructor(private _departmentService: DepartmentsService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this._departmentService.getDepartment()
      .subscribe(data => {
        this.department = data;
        this.dlength = this.department.length;
        this.getDetail(this.departmentId);
      },
        error =>{ this.errorMsg = error});
        console.log(this.dlength);
    
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id =parseInt(params.get('id'));
      this.departmentId = id;
    })
  }

  showOverview(){
    this.router.navigate(['overview'], { relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], { relativeTo: this.route});
  }

  getDetail(dID:number){
    for (let x = 0; x < this.dlength; x++) {
      if (dID === this.department[x].id)
        this.departmentName = this.department[x].name;
    }
    return this.departmentName;
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    if (previousId <= 0){
      this.router.navigate(['../'], { relativeTo: this.route});
    }else{
      this.router.navigate(['../',previousId], { relativeTo: this.route});
      this.getDetail(previousId);
    }
  }

  goNext(){
    let nextId = this.departmentId + 1;
    if (nextId > this.dlength){
      this.router.navigate(['../'], { relativeTo: this.route});
    }else{
      this.router.navigate(['../',nextId], { relativeTo: this.route});
      this.getDetail(nextId);
    }
  }

  goBack(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route});
  }

}
