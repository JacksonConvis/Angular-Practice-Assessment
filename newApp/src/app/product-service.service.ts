import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  inventory: Product[] = [{name: "Buzz Lightyear", productId: "123456", price: 25}, {name: "Toaster", productId: "678910", price: 35},
{name: "Sofa", productId: "111213", price: 1100}, {name: "Desk", productId: "141516", price: 450},
{name: "Keyboard", productId: "171819", price: 67} ];

getAllProducts(){
  return this.inventory;
}

  constructor() { }
}
