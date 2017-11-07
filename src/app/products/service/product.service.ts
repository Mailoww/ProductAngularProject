import { Injectable } from '@angular/core';
import { IProduct } from '../product';

@Injectable()
export class ProductService {

	getProducts(): IProduct[] {
		return [
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
	}

  constructor() { }

}
