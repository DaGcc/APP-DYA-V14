import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Product } from 'src/app/_models/product';
import { ProductoServiceService } from 'src/app/service/producto-service.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {

  products: Product[] = [];

  sortOptions: SelectItem[] = [];

  sortOrder: number = 1;

  sortField: string  = "";

  sortKey :any

  valueFilter : string = ''

  constructor(private productService: ProductoServiceService, private primengConfig: PrimeNGConfig) { }


  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);

    this.sortOptions = [
      { label: 'Precio de alto a bajo', value: '!price' },
      { label: 'Precios de barato a caro', value: 'price' }
    ];

    this.primengConfig.ripple = true;
  }

  onSortChange(event :any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
