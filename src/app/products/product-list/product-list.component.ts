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
  products: IProduct[] = [
  {
     "productId" : 1,
     "productName": "Coffee with milk",
     "productCode": "COFFEE-450",
     "releaseDate": "12/10/17",
     "description" : "Pure arabica  1kg",
     "price" : 19.39,
     "starRating" : 3.2,
     "imageUrl" : "http://www.meghantelpner.com/wp-content/uploads/2014/09/shutterstock_111999368.jpg"     
  },
  {
     "productId" : 2,
     "productName": "Tea",
     "productCode": "TEA-350",
     "releaseDate": "22/12/17",
     "description" : "Green Tea 1kg",
     "price" : 16.17,
     "starRating" : 3.4,
     "imageUrl" : "http://www.delilas.ca/wp-content/uploads/2016/06/tea.jpg"     
  },  
  {
     "productId" : 3,
     "productName": "Coffee black",
     "productCode": "COFFEE-400",
     "releaseDate": "12/10/17",
     "description" : "Pure arabica  1kg",
     "price" : 21.39,
     "starRating" : 3.2,
     "imageUrl" : "http://lesrecettesdecosette.com/IMG/arton141.jpg?1271172226"     
  }     
  ];

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

  constructor() { 
    this.filteredProducts = this.products;
  }

  ngOnInit() {
  }

}
