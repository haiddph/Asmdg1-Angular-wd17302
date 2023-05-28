import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent {
  product: any = ''

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.getProductDetails(productId);
    });
  }
  getProductDetails(id: number) {
    this.productService.getOneProduct(id).subscribe((data) => {
      this.product = data;
      console.log(this.product);
    });
  }
  onHandleSubmit() {
    this.productService.updateProduct(this.product).subscribe(product => {
      console.log(product);
    })
  }
}
