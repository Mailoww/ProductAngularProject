import { ProductService } from '../service/product.service'
import { IProduct } from '../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listeFilter: string;

  filteredProducts: IProduct[];
  products: IProduct[];

	getTitle(): string {
		return this.pageTitle;
	}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  perfomFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
  }

  get listeFilter(): string {
    return this._listeFilter;
  }

  set listeFilter(value: string){
    this._listeFilter = value;
    this.filteredProducts = this.listeFilter ? this.perfomFilter(this.listeFilter) : this.products;
  }

  constructor(private readonly _productService: ProductService) {
    this.products = this._productService.getProducts(); 
    this.filteredProducts = this.products;
  }

  ngOnInit() {
  }

}
