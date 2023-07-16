import { ViewportScroller } from '@angular/common';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PrimeNGConfig } from 'primeng/api';
import { ScrollService } from './service/scroll.service';
import * as  AOS  from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-dya';


  constructor(private primengConfig: PrimeNGConfig, private scrollService : ScrollService) { }

  
  ngOnInit() {
    this.primengConfig.ripple = true;
    AOS.init();
  }

}
