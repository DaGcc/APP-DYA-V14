import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, forkJoin, mergeMap } from 'rxjs';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.scss']
})
export class CrearCuentaComponent implements OnInit {

  hide: boolean = true
  hideTow: boolean = true
  MyEmailControl = new FormControl(undefined, [Validators.required, Validators.email]);

  firstFormGroup: any
  secondFormGroup: any;

  listaRolesFamilia : any= []
  listaGenero : any = []

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CrearCuentaComponent>) { }

  ngOnInit(): void {


    // forkJoin({
    //   generos: this.generoService.obtener(),
    //   rolesFamilia: this.rolFamiliaService.obtener()
    // }).subscribe({
    //   next: (data) => {
    //     console.log(data)
    //     this.listaGenero = data.generos;
    //     this.listaRolesFamilia = data.rolesFamilia;
    //   }
    // })

    this.firstFormGroup = this.formBuilder.group({
      nombres: [undefined, [Validators.required]],
      apellidoPaterno: [undefined, [Validators.required]],
      apellidoMaterno: [undefined, [Validators.required]],
      dni: [undefined, Validators.required],
      edad: [undefined, [Validators.required]],
      direccion: [undefined, [Validators.required]],
      telefono: [undefined, [Validators.required]]
    })

    this.secondFormGroup = this.formBuilder.group({
      rolFamilia: [undefined, Validators.required],
      genero: [undefined, Validators.required],
      email: this.MyEmailControl,
      password: [undefined, Validators.required],
      passwordRep: [undefined, Validators.required]
    })

  }

  getErrorMessage() {
    if (this.MyEmailControl.hasError('required')) {
      return 'Debes ingresar el email';
    }
    return this.MyEmailControl.hasError('email') ? 'No es un correo electronico valido' : '';
  }

  /*metodo solo para crear usuario, role => user */
  crearCuenta() {

    if (this.secondFormGroup.value['password'] == this.secondFormGroup.value['passwordRep']) {
      let usuario: any;

      usuario.genero = this.secondFormGroup.value['genero'];
      usuario.rolFamilia = this.secondFormGroup.value['rolFamilia'];
      usuario.nombres = this.firstFormGroup.value['nombres'];
      usuario.apellidoPaterno = this.firstFormGroup.value['apellidoPaterno'];
      usuario.apellidoMaterno = this.firstFormGroup.value['apellidoMaterno'];
      usuario.dni = this.firstFormGroup.value['dni'];
      usuario.direccion = this.firstFormGroup.value['direccion'];
      usuario.telefono = this.firstFormGroup.value['telefono'];
      usuario.password = this.secondFormGroup.value['password'];
      usuario.email = this.secondFormGroup.value['email'];
      usuario.edad = this.firstFormGroup.value['edad'];
      let rol: any ;
      rol.idRol = 1;//role_user

      usuario.listaRole.push(rol)
      console.log(usuario)

      //BUENA PRACTICA PARA EVITAR SUBSCRIOPCIONES ANIDADAS
      // this.usuarioService.encontrarUsuarioPorEmail(this.secondFormGroup.value['email']).pipe(mergeMap((data: Usuario) => {
      //   console.log(data);
      //   if (data != null) {
      //     this.snackBar.open(`EL EMAIL ${usuario.email} YA SE ENCUENTRA REGISTRADO EN NUESTRO SERVICIO`, 'AVISO', {
      //       duration: 4000
      //     })
      //     return EMPTY;
      //   } else {
      //     this.snackBar.open(`CREANDO CUENTA, ESPERE UN MOMENTO POR FAVOR`, 'AVISO', {
      //       duration: 2500
      //     })
      //     this.commonsService.progressCambio.next(true);
      //     return this.usuarioService.crea(usuario);
      //   }
      // })).subscribe(data => {
      //   console.log(data)
      //   if (data != null) {
      //     setTimeout(()=>{
      //       this.snackBar.open(`SE HA REGISTRADO CON EXITO, AHORA INICIE SESSION`, 'AVISO', {
      //         duration: 3000
      //       })
      //       this.dialogRef.close();
      //     },2500)
      //   } 
      // })

    } else {
      // this.snackBar.open('LAS CONTRASEÑAS NO COINCIDEN', 'AVISO', {
      //   duration: 3000
      // })
    }

  }

}
