import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { RecuperarComponent } from './recuperar/recuperar.component';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  form: any;
  hide: boolean = true;

  MyEmailControl = new FormControl(undefined, [Validators.required, Validators.email]);


  constructor(private dialog: MatDialog,private router: Router
    , private snackBar: MatSnackBar, private app: AppComponent, ) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    this.form = new FormGroup({
      'email': this.MyEmailControl,
      'password': new FormControl(undefined, Validators.required)
    })

  }

  getErrorMessage() {
    if (this.MyEmailControl.hasError('required')) {
      return 'Debes ingresar el email';
    }
    return this.MyEmailControl.hasError('email') ? 'No es un correo electronico valido' : '';
  }

  token: any
  payload: any;
  iniciarSession() {

  }



  openDialog() {
    this.dialog.open(CrearCuentaComponent, {
      height: '700px',
      exitAnimationDuration: '300ms',
      enterAnimationDuration: '300ms'
    });
  }

  openDialogRecuperacion() {
    this.dialog.open(RecuperarComponent, {
      height: '290px',
      exitAnimationDuration: '100ms',
      enterAnimationDuration: '100ms'
    });
  }

}
