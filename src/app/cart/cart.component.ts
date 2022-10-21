import { Component, OnInit } from '@angular/core';
import{ CartService } from '../service/cart.service';
import { Product } from 'src/app/model/products';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public items:Product[];
  //tạo form mới nhóm các input ở trong form mỗi cái input sẽ là 1 formcontrol (c1)
  // public checkoutForm:FormGroup = new FormGroup({name: new FormControl(''), address:new FormControl('')});
  //tạo form c2
  public checkoutForm = this.formBuilder.group({
    name:['',Validators.required],
    address:['',Validators.required]
  });


  constructor(private cartService:CartService, private formBuilder:FormBuilder) {
    this.items = this.cartService.getItems();
  }

  ngOnInit(): void {

  }
  public onSubmit():void{
    //process checkout data here
    this.items = this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    // console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();

  }

}
