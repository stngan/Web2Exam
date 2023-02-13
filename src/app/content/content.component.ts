import {
  Component,
  Input
 } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],

})
export class ContentComponent {

  display = true;
  changeView() {
    this.display = !this.display;

  }

  product_ngFor = [
    {
      productName: "iPhone Xs Max 256GB (Likenew)",
      productPrice: 8990000,
      productImage: "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-xs-max-256gb-mau-gold-didongviet.jpg"
    },
    {
      productName: "iPhone 14 Pro Max 512GB Chính Hãng",
      productPrice: 34990000,
      productImage: "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-14-pro-max-mau-xam-den-didongviet_2.jpg"
    },
    {
      productName: "iPhone 13 Pro 512GB (Likenew)",
      productPrice: 21990000,
      productImage: "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-13-pro-max-256gb-xanh-duong-didongviet_1_1.jpg"
    },
    {
      productName: "iPhone 12 64GB (Likenew)",
      productPrice: 10990000,
      productImage: "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-12-mau-green-didongviet_2.jpg"
    },
  ];

  //khai báo biến thuộc tính để nhận dữ liệu, kiểu dữ liệu any
  // @Input() public parentData: any

  // cách khai báo thứ hai
  @Input("parentData") public data:any

}
