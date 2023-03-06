import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
  <div>
    <p>Cách 1: Truy xuất trực tiếp vào myVar</p>
    <ul>
      <li>{{myVar}}</li>
      <li>{{myVar.toUpperCase()}}</li>
      <li>{{myVar.toLowerCase()}}</li>
    </ul>
  </div>
  <div>
    <p>Cách 2: Trả giá trị từ hàm getMyVar()</p>
    {{ getMyVar() }}
  </div>
  `,
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  public myVar: string = "Hello Angular I'm Song Ngan";

  getMyVar() {
    return this.myVar + this.myVar.toUpperCase()+ this.myVar.toLowerCase()

  }
}
