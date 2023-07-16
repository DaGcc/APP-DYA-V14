import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {


  labels : String[] = ['paracetamol','ibuprofecnp','a','b','c','paracetamol','ibuprofecnp','a','b','c','paracetamol','ibuprofecnp','a','b','c','paracetamol','ibuprofecnp','a','b','c'];

  data : number[] = [12,3,45,111,15,12,3,45,21,15,16,3,45,11,15,12,3,45,11,15];

  load : boolean = false; 
  
  labelsTwo : String[] = ['paracetamol','ibuprofecnp','a','b','c'];

  dataTwo : number[] = [22,39,45,50,19];

  // /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

  // private breakpointObserver: BreakpointObserver
  constructor(@Inject(DOCUMENT) private document: Document) {
    // window.scroll(0,0)
    // // window.scrollTo(0, 0);
    // document.body.scrollTop = 0
    
  }
  ngAfterViewInit(): void {
    // document.body.scrollTop = 0
    window.scroll(0, 0);
    // window.scroll(0,0)
    // this.document.documentElement.scrollTop = 0;
  }
  ngOnInit(): void {
    // setTimeout(()=>{
    //   this.load = false
    // },1000)
    this.document.documentElement.scrollTop = 0;
    window.scroll(0, 0);
  }
}
