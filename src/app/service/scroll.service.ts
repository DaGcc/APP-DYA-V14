import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router, Scroll } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private lastRouteUrl: string | null = null;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // this.viewportScroller.scrollToPosition([0, 0]);
        // window.scrollTo(0, 0);

      }
    });

    // this.router.events.subscribe(event => {
    //   if (event instanceof Scroll) {
    //     if (event.position) {
    //       // Guarda la URL de la última ruta con posición de scroll
    //       this.lastRouteUrl = event.routerEvent.url;
    //     } else {
    //       // Al cambiar de ruta sin posición de scroll, restaura el scroll al principio
    //       if (this.lastRouteUrl === event.routerEvent.url) {
    //         window.scrollTo(0, 0);
    //       }
    //     }
    //   }

    //   console.log(this.lastRouteUrl)
    // });
  }
}
