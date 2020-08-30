import { Component, OnInit , ViewChild} from '@angular/core';
import { Cliente } from './models/cliente.model';
import {  TallerService } from './services/taller.service';
import { UsuarioModel } from './models/usuario.model';
import { NgModel, NgForm } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { logging } from 'protractor';



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
    vehiculo: '',
    visita:0
  }

  dui: string =  '';

  clientes: Cliente[] = [];
  @ViewChild('child1') childOne:CardComponent;


  constructor(private taller:TallerService)
  {
    
  }

  ngOnInit()
  { 
      console.log();
      
    
      this.clientes = this.taller.cargarStorage();
      console.log(this.clientes);

    
}

  guardar(forma:NgForm)
  {
    console.log(forma.value)
    this.taller.crearCliente( forma.value );
    this.taller.cargarStorage();
  }  

}



