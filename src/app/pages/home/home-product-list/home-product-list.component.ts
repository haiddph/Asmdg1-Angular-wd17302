import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-product-list',
  templateUrl: './home-product-list.component.html',
  styleUrls: ['./home-product-list.component.scss']
})
export class HomeProductListComponent {
  products: IProduct[] = []
  constructor(private product: ProductService) {
    this.product.getAllProduct().subscribe(data => {
      this.products = data
    })
  }
}
