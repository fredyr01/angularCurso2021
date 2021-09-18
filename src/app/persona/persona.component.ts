import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre:string = 'Fredy';
  apellido:string = 'Rios';
  // private edad:number = 27;
  edad:number = 27;

  // * Si el atributo es privado se antepone a la declaración, private.
  //* Se declara un metodo que devuelva el valor de ese atributo
  
  //* getEdad():number{
  //*   return this.edad;
  //*  }

}
