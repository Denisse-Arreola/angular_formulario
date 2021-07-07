import { Component, OnInit } from '@angular/core';
import { Iemail } from '../Iemail';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  formulario: Iemail = {
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  };

  constructor() { 
    
  }

  submit(){
    if(this.formulario.password !== this.formulario.repeatPassword){
      alert("Las contraseñas no coinciden, intente de nuevo");
    }else{
      alert("Todo en orden, datos recibidos");
    }
  }

  ngOnInit(): void {
  }

}
