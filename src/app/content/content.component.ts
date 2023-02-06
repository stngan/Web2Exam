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

}
