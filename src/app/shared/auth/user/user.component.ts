import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Rol } from 'src/app/_models/rol';

import { Usuario } from 'src/app/_models/usuario';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  usuario : Usuario = new Usuario();

  token : any;
  tokenDecoded: any;
  displayedColumns : string[]= ['idConsulta','especialidad','detalle'];
  dataSource : any;

  //para la aplicacion de servicio paginado
  cantidad: number = 0;
  pageSize: number = 5;
  pageIndex: number = 0;

  EstadoPaginatorTow: boolean = false
  filtroDto : any 

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor( private dialog : MatDialog) { }

  ngOnInit(): void {
 
    this.usuario.nombres = "Daniel amadeo"
    this.usuario.apellidoPaterno = "gutierrez";
    this.usuario.apellidoMaterno = "ccallasaca";
    this.usuario.edad = 33;
    this.usuario.email = "gutierrezcallasacadaniel@gmail.com";
    this.usuario.estado = true //falta agregar este campo ? +i => Jwt
    this.usuario.direccion = "ica - ica - ica";
    this.usuario.telefono = "999999999";

    let rol = new Rol()
    rol.idRol = 1
    rol.nombre = "ADMIN"
    
    this.usuario.listaRole.push(rol)
    
    console.log(this.usuario)

    // this.filtroDto = new FiltroConsultasPacienteDTO(this.usuario.nombres,this.usuario.apellidoPaterno,this.usuario.apellidoMaterno,this.usuario.email);

   
  }


  mostrarMas(e : any){
    // console.log(this.filtroDto)
  
  }

  openDialog(entity : any){


  }

}
