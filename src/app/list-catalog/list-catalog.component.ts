import { Component } from '@angular/core';

@Component({
  selector: 'app-list-catalog',
  templateUrl: './list-catalog.component.html',
  styleUrls: ['./list-catalog.component.css']
})
export class ListCatalogComponent {
  database = [
    {
      "CateID": "Cate1",
      "CateName" : "Máy tính",
      "Products": [
        {
          "ProductID": "Cate1_pr1",
          "ProductName": "Laptop Acer",
          "Price": 500
        },
        {
          "ProductID": "Cate1_pr2",
          "ProductName": "Laptop Asus",
          "Price": 400
        },
        {
          "ProductID": "Cate1_pr3",
          "ProductName": "Laptop HP",
          "Price": 300
        },
        {
          "ProductID": "Cate1_pr4",
          "ProductName": "Laptop Dell",
          "Price": 800
        },
        {
          "ProductID": "Cate1_pr5",
          "ProductName": "Laptop MSI",
          "Price": 750
        },
      ],
    },
    {
      "CateID": "Cate2",
      "CateName" : "Iphone",
      "Products": [
        {
          "ProductID": "Cate2_pr1",
          "ProductName": "iPhone Xs Max 256GB",
          "Price": 900
        },
        {
          "ProductID": "Cate2_pr2",
          "ProductName": "iPhone 14 Pro Max 512GB",
          "Price": 1500
        },
        {
          "ProductID": "Cate2_pr3",
          "ProductName": "iPhone 13 Pro 512GB",
          "Price": 1200
        },
        {
          "ProductID": "Cate2_pr4",
          "ProductName": "iPhone 12 64GB",
          "Price": 1000
        },
        {
          "ProductID": "Cate2_pr5",
          "ProductName": "iPhone 6s Plus",
          "Price": 100
        },
      ],
    },
    {
      "CateID": "Cate3",
      "CateName" : "Samsung",
      "Products": [
        {
          "ProductID": "Cate3_pr1",
          "ProductName": "Samsung 1",
          "Price": 900
        },
        {
          "ProductID": "Cate3_pr2",
          "ProductName": "Samsung 2",
          "Price": 1500
        },
        {
          "ProductID": "Cate3_pr3",
          "ProductName": "Samsung 3",
          "Price": 1200
        },
        {
          "ProductID": "Cate3_pr4",
          "ProductName": "Samsung 4",
          "Price": 1000
        },
        {
          "ProductID": "Cate3_pr5",
          "ProductName": "Samsung 5",
          "Price": 100
        },
      ],
    },
  ]
}
