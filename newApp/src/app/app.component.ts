import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductServiceService } from './product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newApp';

    allProducts: Product[] =[];

  constructor(private Products: ProductServiceService){

    this.allProducts = Products.getAllProducts();
  }
  length: number = this.allProducts.length;


}
