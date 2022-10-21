import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productList } from '../model/products';
import { CartService} from '../service/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  //define the product property
  public product: Product | undefined;
  //inject ActivatedRoute into constructor
  constructor(private route: ActivatedRoute, private cartService:CartService ) { }

  ngOnInit(): void {
    //đầu tiên lấy product id từ router hiện tại
    //dùng route.snapshot(ActivatedRouteSnapshot: chứa thông tin route đang hoạt động thời điểm đó_URL mà nối với active route có cung cấp idproduct) để truy cập đến route parameter
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    //tìm prodcut đúng với id được cung cấp trong router
    this.product = this.findProduct(productIdFromRoute);
  }
  public findProduct(idProduct: number): Product {
    let result = {
      id: 0,
      name: '',
      price: 0,
      description: ''
    };
    productList.forEach(element => {
      if (element.id === idProduct)
        result = element;
    });
    return result;
  }

  //dùng service để gọi đến pt thêm sản phẩm rồi truyền vào product hiện tại
  //sau đó thông báo là sản phẩm đã được thêm
  public addToCart(product:Product):void{
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
