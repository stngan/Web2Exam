import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property',
  template:`
  <div>
    <input type="text" [value]="name" [id]="nameid">
  </div>
  <div>
    <input type="text" value="{{email}}" id="{{emailid}}" [disabled]="isDisabled">
  </div>
  `,
  templateUrl: './binding-property.component.html',
  styleUrls: ['./binding-property.component.css']
})
export class BindingPropertyComponent {
  public name:string="Trần Duy Thanh"
  public email:string="thanhtd@uel.edu.vn"
  public nameid:string="nameid"
  public emailid:string="emailid"
  public isDisabled:boolean=true
}
