import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductoServiceService } from 'src/app/service/producto-service.service';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit {

  products : Product[] = [];
	
  @Input()
  titulo: String | undefined

	responsiveOptions;

	constructor(private productService: ProductoServiceService) { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

  ngOnInit() {
		this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
  }
}
