import { DepartmentService } from './../services/department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit{

  // tạo biến department
  departments: any;

  // : gọi tới service của mình
  constructor(private _departmentsService: DepartmentService) {

  }

  ngOnInit(): void{
    this.departments = this._departmentsService.getDepartmentList();

  }

  // viewDetail() {
  //   this.departments = this._departmentsService.getDepartmentList();
  // }



}
