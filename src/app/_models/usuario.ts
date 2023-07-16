import { Rol } from "./rol";

export class Usuario {
    idUsuario : any;
    email: string | undefined;
    password: string | undefined;
    nombres: string | undefined;
    apellidoPaterno: string | undefined;
    apellidoMaterno: string | undefined;
    edad: number | undefined;
    direccion: string | undefined;   
    telefono: string | undefined;
    estado: boolean = true; 
    listaRole : Rol[] = []
}