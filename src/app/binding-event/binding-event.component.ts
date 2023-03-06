import { Component } from '@angular/core';

@Component({
  selector: '[app-binding-event]',
  template:`
  <p>Hệ số a:</p>
  <input type="number" #hesoA>

  <p>Hệ số b:</p>
  <input type="number" #hesoB>

  <p>
    <button (click)="xulypheptoan(hesoA.value,hesoB.value,'+')"> + </button>
    <button (click)="xulypheptoan(hesoA.value,hesoB.value,'-')"> - </button>
    <button (click)="xulypheptoan(hesoA.value,hesoB.value,'x')"> x </button>
    <button (click)="xulypheptoan(hesoA.value,hesoB.value,':')"> : </button>
    <button (click)="hesoA.value=' ';hesoB.value=' '; result=' '"> Clear </button>
  </p>

  <p>{{result}}</p>
  `,
  styleUrls: ['./binding-event.component.css']
})
export class BindingEventComponent {
  result: any; // biến result được binding 2 way

  xulypheptoan(arg0: string, arg1: string, arg2: string) {
    let a = parseFloat(arg0)
    let b = parseFloat(arg1)

    if(arg2 == '+') {
      this.result= a + " + " + b + " = " + (a + b);
    }
    if(arg2 == '-') {
      this.result= a + " - " + b + " = " + (a - b);
    }
    if(arg2 == 'x') {
      this.result= a + " x " + b + " = " + (a * b);
    }
    if(arg2 == ':') {
      this.result= a + " : " + b + " = " + (a / b);
    }

  }
}
