import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-product-detail',
  templateUrl: './home-product-detail.component.html',
  styleUrls: ['./home-product-detail.component.scss']
})
export class HomeProductDetailComponent {
  products: any = {
    name: '',
    price: 0
  }
  constructor(
    private product: ProductService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.product.getOneProduct(id).subscribe(data => {
        this.products = data
      })
    })
  }
}
