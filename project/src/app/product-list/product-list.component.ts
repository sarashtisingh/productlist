import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  id: string;
  name: string;
  price: number;
  category: string;
  searchText;
  
  List=[
    {'Id':'p01', 'Name': 'Samsung', 'price':20000, 'category': 'mobile'},
    {'Id':'p02', 'Name': 'Redmi', 'price':15000, 'category': 'mobile'},
    {'Id':'p03', 'Name': 'Dell', 'price':40000, 'category': 'laptop'},
    {'Id':'p04', 'Name': 'Apple', 'price':80000, 'category': 'laptop'}
  ]
  
  delete(n)
  {
    this.List.splice(n,1);
  }


  constructor() { }

  ngOnInit() {
  }

}
