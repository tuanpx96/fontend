import {Component , OnInit} from "@angular/core";

import {Product} from "../product";
import {ProductService} from "../product.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

  add(prod_name: string): void {
    prod_name = prod_name.trim();
    if (!prod_name) { return; }
    this.productService.addProduct({ prod_name } as Product)
      .subscribe(hero => {
        this.products.push(hero);
      });
  }

  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product).subscribe();
  }

}
