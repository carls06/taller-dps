import { Component, OnInit } from '@angular/core';
import { Cliente } from './models/cliente.model';
import {  TallerService } from './services/taller.service';
import { UsuarioModel } from './models/usuario.model';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  
  title = 'taller';

  cliente = {
    nombre: '',
    dui: '',
    vehiculo: ''
  }

  dui: string =  '';

  clientes: Cliente[] = [];


  constructor(private taller:TallerService)
  {
    
  }

  ngOnInit()
  {
    if(localStorage.getItem('data'))
    {
      this.clientes = this.taller.cargarStorage();
      console.log(this.clientes);
    }else{
      console.log("no esta");
    }
  }

  guardar(forma:NgForm)
  {
    console.log(forma.value)
    this.taller.crearCliente( forma.value );
  }  

}



