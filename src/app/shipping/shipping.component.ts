import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { string } from 'prop-types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  //? kiểm tra không phải undefined
  shippingCosts?: Observable<{ type: string, price: number }[]>;

  //còn constructor chỉ được chạy 1 lần vì thế nên là nếu đặt shippingCost ở đây
  //nghĩa là nó được tạo đúng 1 lần nếu có thay đổi gì bên getShippingPrices() nó sẽ ko được cập nhật
  constructor(private cartService: CartService) {
    // this.ngOnInit();
  }

  //đặt ở trong onInit vì bất cứ khi nào component này được gọi thì shipping costs sẽ được tạo
  //mỗi lần mình chỉ đến component này thì ngOnInit sẽ được gọi
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
