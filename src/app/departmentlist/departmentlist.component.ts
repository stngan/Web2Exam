import { DepartmentService } from './../services/department.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent {

  // tạo biến department
  departments: any;

  // : gọi tới service của mình
  constructor(private _departmentsService: DepartmentService) {

  }

  ngOnInit(): void{
    this.departments = this._departmentsService.getDepartmentList();

  }


}
