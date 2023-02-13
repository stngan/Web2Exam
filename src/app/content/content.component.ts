import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  // templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],

  template: `
    <h2>Product: {{productName}}</h2>

    <h2>{{"Product Price: " + productPrice}}</h2>

    <h2>{{productCategory.toUpperCase()}}</h2>

    <h3>{{ test() }}</h3>

    <button (click) = "onClick($event)" >
      Click me

    </button>

    <hr>

    <!-- làm form với 2 way binding -->
    <div>
      <label for="">Enter student 1: </label>
      <input type="text" [(ngModel)] = "st1">

      <label for="">Enter student 2: </label>
      <input type="text" [(ngModel)] = "st2">

      <label for="">Enter student 3: </label>
      <input type="text" [(ngModel)] = "st3">


      <!-- <button (click)="saveData()">
        Save data
      </button> -->

      <button (click)="resetData()">
        Reset data
      </button>

      <p>Full Name student 1: <span>{{st1}}</span></p>
      <p>Full Name student 2: <span>{{st2}}</span></p>
      <p>Full Name student 3: <span>{{st3}}</span></p>
    </div>


  `
})
export class ContentComponent {


  productName = "TITLE BOOK";
  productPrice = 5.6;
  productCategory = "Hàng tiêu dùng";


  onClick(event: any ) {
    this.productName = "Changed title book"

  }

  test() {
    console.log("Hello");
  }

  st1 ="";
  st2 ="";
  st3 ="";

  resetData() {
    this.st1 = "";
    this.st2 = "";
    this.st3 = "";
  }

}
