import { Component, OnInit } from '@angular/core';
import { Taller } from './models/cliente.model';
import {  TallerService } from './services/taller.service';
import { UsuarioModel } from './models/usuario.model';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


  
export class AppComponent implements OnInit{

  clientes:UsuarioModel=new UsuarioModel();

  constructor(private taller:TallerService)
  {
    
  }

  ngOnInit()
  {
    if(localStorage.getItem('data'))
    {
      this.clientes = this.taller.clientes;
    }
  }

  guardar(forma:NgForm)
  {
    console.log(forma.value)
  }
  


  title = 'taller';

  

}



