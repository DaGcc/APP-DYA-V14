import { Component, Inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { ScrollService } from '../service/scroll.service';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { NavigationEnd, Router, UrlSegmentGroup, UrlTree } from '@angular/router';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent implements OnInit {

  items: MenuItem[] = [];


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private viewportScroller: ViewportScroller, @Inject(DOCUMENT) private document: Document,private router: Router) {

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      // Actualizar el estado de la ruta activa
    });
   }
  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/home',
        routerLinkActiveOptions:{
          "exact" : true,
          "active": "ative"
        }
      },
      {
        label: 'Admin',
        icon: 'pi pi-bolt',
        items: [
          { label: 'Dashboard', icon: 'pi pi-qrcode',routerLink: '/dashboard' },
          { label: 'Empleados', icon: 'pi pi-users',routerLink: '/empleados' },
          { label: 'Productos', icon: 'pi pi-fw pi-shopping-cart',routerLink: '/productos'  }
        ]
      },
      {
        label: 'Plantillas',
        icon: 'pi pi-credit-card',
        items: [

          {
            label: 'Http',
            icon: 'pi pi-pi pi-file',
            items: [
              {
                label: '401 - Unauthorized',
                routerLink: 'page-401'
                
              },
              {
                label: '403 - forbidden',
                routerLink: 'page-403'
                
              },
              {
                label: '404 - Not foud',
                routerLink: 'page-404'
              }
            ]
          },
          {
            label: 'Auth',
            icon: 'pi pi-unlock',
            items: [  
              {
                label: 'login',
                routerLink: 'login'
                
              },
              {
                label: 'User',
                icon: 'pi pi-user',
                routerLink: 'user'
                
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-mt pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              { label: 'Delete', icon: 'pi pi-fw pi-minus' }
            ]
          }
        ]
      }
    ];
  }
  cambiar() {
    this.document.documentElement.scrollTop = 0;
  }
}
