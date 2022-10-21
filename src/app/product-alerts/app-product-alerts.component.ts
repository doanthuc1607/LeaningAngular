import { Component, OnInit } from '@angular/core';
//to set up this component to receive product data
import { Input } from '@angular/core';
import {Product} from '../model/products';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './app-product-alerts.component.html',
  styleUrls: ['./app-product-alerts.component.scss']
})
export class AppProductAlertsComponent implements OnInit {
  // @Input() chỉ ra rằng giá trị của thuộc tính sẽ truyền từ cha của component ProductListComponent
  // ! cho phep đối tượng truyền vào được phép null
  //undefined là không xác định (ko null chỉ là ko xác định được?)
  @Input() product: Product|undefined;
  //@output cho phép component này phát ra 1 sự kiện (emit an event) khi giá trị của notify thay đổi
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
