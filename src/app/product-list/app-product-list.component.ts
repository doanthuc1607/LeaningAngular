import { Component, OnInit } from '@angular/core';
import {Product, productList } from '../model/products'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.scss']
})
export class AppProductListComponent implements OnInit {
   private products = productList;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

 public getProducts(): Product[]{
   return this.products;
 }

 public setProducts(products:Product[]){
  return this.products = products;
}

public share():void{
  window.alert('The product has been shared!')
}

//onNotify hoạt động khi con có sự kiện
public onNotify(product:Product):void{
  window.alert('You will be notified when the product '+product.name+ ' goes on sale');
}

// navigate(id: number){
//  this.route.navigateByUrl("products/" + id);
// }

}
