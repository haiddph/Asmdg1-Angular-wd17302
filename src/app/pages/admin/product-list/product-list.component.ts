import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductAdminComponent {
  products: IProduct[] = []
  constructor(private product: ProductService) {
    this.product.getAllProduct().subscribe(data => {
      this.products = data
    })
  }
  removeItem(id: any) {
    const confirm = window.confirm("mày muốn xóa cái này ko!")
    if (confirm) {
      this.product.removeProduct(id).subscribe(() => {
        this.products = this.products.filter(item => item.id !== id)
      })
    }
  }
}