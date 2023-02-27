import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-departmentdetail',
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css']
})
export class DepartmentdetailComponent{
  departments: any;
  constructor(private _s: DepartmentService) {
    // this.departments = this._s.getDepartmentList();
  }

  // ngOnInit(): void {
  //   this.departments = this._s.getDepartmentList();

  // }

  showDetail(){
    this.departments = this._s.getDepartmentList();

  }

}
