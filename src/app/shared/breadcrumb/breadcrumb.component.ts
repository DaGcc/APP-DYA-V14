import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  items: MenuItem[] = [];

  home!: MenuItem;

  titulo : string = ""


  constructor(private router: Router) { }

  ngOnInit() {

    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.items = [
      { label: 'Dashboard', routerLink: 'dashboard' },
    ];

    this.router.events
    .pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((ac: ActivationEnd ) =>  ac.snapshot.component!==null && ac.snapshot.firstChild===null),
      map( (ac: ActivationEnd) => ac.snapshot.data )
    )
    .subscribe(( { titulo }) => {
      this.items = [
        {label : titulo }
      ]
      console.log(titulo)
      document.title = `APP - ${titulo}`;
      this.titulo = titulo
    });


  }

  item(e: any) {
    // console.log(e)
  }
}
