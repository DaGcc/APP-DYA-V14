import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss']
})
export class RecuperarComponent implements OnInit {

  form : any;
  porcentaje : number = 0;
  MyEmailControl = new FormControl(undefined, [Validators.required, Validators.email]);
  constructor(private snackBar:MatSnackBar,public route :ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email' : this.MyEmailControl
    })
  }
  

  getErrorMessage() {
    if (this.MyEmailControl.hasError('required')) {
      return 'Debes ingresar el email';
    }
    return this.MyEmailControl.hasError('email') ? 'No es un correo electronico valido' : '';
  }


  enviarCorreo(){
    this.porcentaje = 45;
    console.log(this.form.value['email'])
    // this.loginService.enviarCorreo(this.form.value['email']).subscribe(data=>{
    //   if(data==1){
    //     setTimeout(() => {
    //       this.porcentaje = 75;
    //       setTimeout(()=>{
    //         this.porcentaje = 100;
    //         this.snackBar.open('Se enviaron las indicaciones a su correo','OK')
    //       },500)
    //     },400)
    //   }else {
    //     this.snackBar.open('El usuario ingresado no existe','OK')
    //     this.porcentaje = 0;
    //   }
    // })
  }
}
