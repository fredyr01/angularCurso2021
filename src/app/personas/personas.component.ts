import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    // template: `<h1>Listado de personas</h1>
    // <app-persona></app-persona>
    // <app-persona></app-persona>`,
    templateUrl :'./personas.component.html',
    styleUrls : ['./personas.component.css']

    //*  Para el style inline se declara 
    //*  styles:[`
    //*     h1{
    //*        color:blue
    //*    }
    //* `]

})

export class PersonasComponent{

    deshabilitar = false;
    mensaje:string = 'No se ha agregado ninguna persona';   //*Valor por defecto
    titulo:string = '';  //* Si se declara un valor, este aparecerá en la página por defecto

    agregarPersona(){
        this.mensaje = 'Persona agregada';
    }
    
    // todo --------- Este metodo solo es valido cuando se usa el event binding
    //* modificarTitulo(event: Event){
    //*    this.titulo = (<HTMLInputElement>event.target).value;
    //* }

    

}