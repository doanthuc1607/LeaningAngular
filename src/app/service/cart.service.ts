import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/products';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class CartService {
  //create array to store current product in cart
  private items:Product[]=[];

  constructor(private http: HttpClient) {}

  //method appends a product to an array of items
  public addToCart(product:Product):void{
    this.items.push(product);
  }

  //method collects the items users add to the cart and returns each item with its associated quantity
  public getItems():Product[]{
    return this.items;
  }

  //method returns an empty array of items, which empties the cart
  public clearCart():Product[]{
    this.items=[];
    return this.items;
  }

  public getShippingPrices(){
    return this.http.get<{type:string, price:number}[]> ('/assets/shipping.json');
  }

}
