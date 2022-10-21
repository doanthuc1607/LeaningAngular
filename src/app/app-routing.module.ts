import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AppProductListComponent } from 'src/app/product-list/app-product-list.component';
import { ProductDetailsComponent } from 'src/app/product-details/product-details.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { ShippingComponent } from 'src/app/shipping/shipping.component';

const routes: Routes = [{ path: "product", component: AppProductListComponent },
{ path: "products/:productId", component:ProductDetailsComponent},
{ path: "cart", component:CartComponent},
{ path: "shipping", component:ShippingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
